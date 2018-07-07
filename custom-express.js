module.exports = function () {
  require('dotenv').config()
  const express = require('express')
  const app = express() // http.createServer

  app.set('view engine', 'ejs')
  app.use(express.static('./public'))

  app.use(express.urlencoded())
  app.use(express.json())

  // app.get('/', function() {})
  app.get('/', (req, res) => res.render('home/index'))

  // const produtosRoutes = require('./routes/produtos')
  // produtosRoutes(app)
  require('./routes/produtos')(app)

  app.use((req, res, next) => {
    res.render("erros/500", {erro: "404 - Página não encontrada"})
  })

  app.use((erro, req, res, next) => {
    res.render("erros/500", {erro: erro})
  })

  return app
}