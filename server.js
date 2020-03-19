const express = require("express")
const server = express()

    server.listen(3000, function () {
    console.log("Iniciei o Servidor.")
})

// configurando a template engine
const nunjucks = require("nunjucks")
nunjucks.configure("./", {
    express: server
})

// configurar o servidor para apresentar arquivos extrar 
server.use(express.static('public'))

server.use(express.urlencoded({ extended: true }))

// lista de doadores(vetor ou array)
const donors = [
    {
        name: "Diego Fernandes",
        blood: "AB+"
    },
    {
        name: "Diego Almeida",
        blood: "AB+"
    },
    {
        name: "Diego Oliveira",
        blood: "AB+"
    },
    {
        name: "Diego Cruz",
        blood: "AB+"
    },
]

server.get("/", function (req, res) {
     return res.render("index.html", { donors })
})

server.post("/", function (req, res) {
    const name = req.body.name
    const email = req.body.email
    const blood = req.body.blood

    // colocando valores dentro do array 
    donors.push({
        name: name,
        blood: blood,
    })

    return res.redirect("/")
})

// Configuração com banco de dados

