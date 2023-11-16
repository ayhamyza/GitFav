export class Favorites {
    constructor (root) {
        this.root = document.querySelector (root)
        this.load()
    }
    
load() {
    this.entries =  [
        {
        login: 'maykbrito',
        name: "Mayk Brito",
        public_repos: '76',
        followers: '12000'
        },

        {
        login: 'ayhamyza',
        name: "Ayhamyza",
        public_repos: '76',
        followers: '12000'
        }           
    ]
}
    delete(user) {
        const filteredEntries = this.entries
        .filter(entry => entry.login !== user.login)

        console.log(filteredEntries)
    }  
}


export class FavoritesWiew extends Favorites {
    constructor (root) {
        super (root)
        
        this.tbody = this.root.querySelector('table tbody')

        this.update()
    }

    update() {
        this.removeAllTr()

       
        this.entries.forEach( user => {
            const row = this.createRow()
            
            row.querySelector('.user img').src = `https://github.com/${user.login}.png`
            row.querySelector('.user img').alt = `imagem de ${user.name}`
            row.querySelector('.user p').textContent = user.name
            row.querySelector('.user span').textContent = user.login
            row.querySelector('.repositories').textContent = user.public_repos
            row.querySelector('.followers').textContent = user.followers

            row.querySelector('.remove').onclick = () => {
                const isOk = confirm('Tem certeza que deseja deletar essa linha?')

                if(isOk) {
                    this.delete(user)
                }
            }

            this.tbody.append(row)
        })    
    }

    createRow() {
        const tr = document.createElement('tr')
        const content = `
        <td class="user">
                <img src="https://github.com/maykbrito.png" alt="imagem de mayk brito">
                <a href="https://github.com/maykbrito" target="_blank" >
                <p>mayk brito</p>
                <span>maykbrito</span>
            </a>
        </td>
        <td class="repositories">
            01
        </td>
        <td class="followers">
            02
        </td>
        <td>
            <button class="remove">Remover</button>
        </td>
        `

        tr.innerHTML = content

        return tr
    }

    removeAllTr(){
        this.tbody.querySelectorAll('tr')
        .forEach((tr) => {
            tr.remove()
        })
    }
}