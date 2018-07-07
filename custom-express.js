module.exports = function () {
  require('dotenv').config()
  const express = require('express')
  const app = express() // http.createServer

  app.set('view engine', 'ejs')
  app.use(express.static('./public'))

  app.use(express.urlencoded())
  app.use(express.json())

  const expressValidator = require('express-validator')
  app.use(expressValidator())

  // app.get('/', function() {})
  app.get('/', (req, res) => res.render('home/index'))

  // const produtosRoutes = require('./routes/produtos')
  // produtosRoutes(app)

  require('./routes/produtos')(app)

  require('./routes/promocoes')(app)

  app.use((req, res, next) => {
    res.status(404).render("erros/500", {erro: "404 - Página não encontrada"})
  })

  app.use((erro, req, res, next) => {
    res
      .status(500)
      .format({
        html: () => res.render("erros/500", {erro: erro}),
        json: () => res.send(erro)
      })
    
  })

  return app
}