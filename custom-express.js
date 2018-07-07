module.exports = function () {
  require('dotenv').config()
  const express = require('express')
  const app = express() // http.createServer

  app.set('view engine', 'ejs')
  app.use(express.static('./public'))

  app.use(express.urlencoded())
  app.use(express.json())

  // const queryString = require("query-string")
  // app.use((req, res, next) => {
    // if(req.method == "POST" && req.header().find("Content-Type") === "application/xx-urlencoded-data"){
  //     let bodyString = ""
        
  //     req.on("data", (chunk) => {
  //       bodyString += chunk.toString()
  //     })
    
  //     req.on("end", bodyPronto)
    
  //     function bodyPronto(){
  //       req.body = queryString.parse(bodyString)
  //       console.log("Criou o Body")
  //       next()
  //     }
  //   }
  // })
  // app.use((req, res, next) => {
  //   if(req.method == "POST"){
  //     let bodyString = ""
        
  //     req.on("data", (chunk) => {
  //       bodyString += chunk.toString()
  //     })
    
  //     req.on("end", bodyPronto)
    
  //     function bodyPronto(){
  //       req.body = JSON.parse(bodyString)
  //       console.log("Criou o Body")
  //       next()
  //     }
  //   }
  // })

  // app.get('/', function() {})
  app.get('/', (req, res) => res.render('home/index'))

  // const produtosRoutes = require('./routes/produtos')
  // produtosRoutes(app)
  require('./routes/produtos')(app)

  return app
}