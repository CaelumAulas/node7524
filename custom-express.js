module.exports = function () {
  require('dotenv').config()
  const express = require('express')
  const app = express() // http.createServer

  app.set('view engine', 'ejs')
  app.use(express.static('./public'))

  // app.get('/', function() {})
  app.get('/', (req, res) => res.render('home/index'))

  // const produtosRoutes = require('./routes/produtos')
  // produtosRoutes(app)
  require('./routes/produtos')(app)

  return app
}