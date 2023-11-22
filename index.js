const express = require('express')
const exphbs = require('express-handlebars')
const app = express()

// Invocação para usar partial
const hbs = exphbs.create({
    partialsDir:['views/partials'],
})

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

// usando css
app.use(express.static('public'))

app.get('/', (req, res) => {

    //envio de variáveis
    const data = {
        name: "Henrique",
        surname: "Sales",
    }

    // variável para testar o if else
    const auth = true

    // variável para iteração each
    const items = ['item a', 'item b', 'item c']

    const post = {
        title: "Aprendendo Node.js",
        category: "JavaScript",
        body: "Esta variável é para como mexer com With Nodejs",
        comments: 4,
    }

    const news = [
        {
            title: "Primeiro Título da Notícia",
            category: "Primeira Categoria da Notícia",
        },
        {
            title: "Segundo Título da Notícia",
            category: "Segunda Categoria da Notícia",
        },
        {
            title: "Terceira Título de Notícia",
            category: "Terceira Categoria de Notícia",
        },
    ]

    res.render('home', { user: data, auth, items, post, news })
})

app.listen(3000, () => {
    console.log("App funcionando na porta 3000")
})