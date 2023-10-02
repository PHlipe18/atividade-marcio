const express = require("express")
const express = require("express-handlebars")
const mysql = require("mysql")

const app = express()

app.engine('handlebars', exphbs.engine())
app.set('viewengine', 'handlebars')

app.get('/', (req, res) => {
    res.render('home')
} )

//criando conexao com mySQL

const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "nodemysql",
    port: 3307
})

conn.connect((err) => {
    if (error) {
        console.log(error)
        return
    }

    console.log('Conectou ao MySQL')

    app.listen(3000, () =>{
        console.log('Servidor rodando na porta 3000')
    } )
} )