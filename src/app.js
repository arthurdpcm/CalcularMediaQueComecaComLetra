
//importação do express
const express = require("express")
// instancia do express iniciada
const app = express()


const routes = require('./routes')
app.use(express.json())


app.use('/api', routes)

app.listen("8080", ()=>{
    console.log("Servidor rodando");
})

