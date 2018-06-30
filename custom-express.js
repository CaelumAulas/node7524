module.exports = function (port) {
  console.log('EITA', port)
  // const express = require('express')()
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

  return {
    app: app,
    express: express
  }
}