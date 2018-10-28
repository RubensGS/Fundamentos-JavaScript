const porta = 3003

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const bancoDeDados = require('./bancoDeDados')

// app.get('/produtos', (requisicao, resposta, next) => {
//     console.log('Middleware 1...');
//     next()
// })

// app.get('/produtos', (requisicao, resposta, next) => {
//     resposta.send({nome: 'Notebook', preco: 123.56}) // Converter para JSON
// })

// Middleware - Faz o parse do corpo da requisição utilizando o padrão urlEncoded
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/produtos', (requisicao, resposta, next) => {
    resposta.send(bancoDeDados.getProdutos())
})

app.get('/produtos/:id', (requisicao, resposta, next) => {
    resposta.send(bancoDeDados.getProduto(requisicao.params.id))
})

app.post('/produtos', (requisicao, resposta, next) => {
   const produto = bancoDeDados.salvarProduto({
        nome: requisicao.body.nome,
        preco: requisicao.body.preco
    })
    resposta.send(produto) // JSON
})

// Alterar
app.put('/produtos/:id', (requisicao, resposta, next) => {
    const produto = bancoDeDados.salvarProduto({
         id: requisicao.params.id,
         nome: requisicao.body.nome,
         preco: requisicao.body.preco
     })
     resposta.send(produto) // JSON
 })

 //Deletar
 app.delete('/produtos/:id', (requisicao, resposta, next) => {
    const produto = bancoDeDados.excluirProdutos(requisicao.params.id)
     resposta.send(produto) // JSON
 })

app.listen(porta, () =>{
    console.log(`Servidor executando na porta ${porta}.`);
})