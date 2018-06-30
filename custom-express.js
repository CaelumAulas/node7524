module.exports = function () {
  const express = require('express')
  const app = express() // http.createServer

  app.set('view engine', 'ejs')

  // app.get('/', function() {})
  app.get('/', (req, res) => {
    res.render('home/index')
  })

  app.get('/produtos', function(req, res) {
    res.render('produtos/lista')
  })

  return app
}