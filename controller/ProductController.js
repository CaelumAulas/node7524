const ProductDao = require('../dao/ProductDao')
const connectionFactory = require('../infra/connectionFactory')

const ProductController = {}


ProductController.list = (req, res) => {
  const connection = connectionFactory()
  const productDao = new ProductDao(connection)

  productDao.list((error, livros, fields) => {
    if(!error){
      res.render('produtos/lista.ejs', { livros:  livros })
    } else {
      res.render("erros/500", {erro: error.message})
    }
  })

  connection.end()
}

ProductController.create = (req, res) => {
  const livroNovo = req.body

  const connection = connectionFactory()
  const productDao = new ProductDao(connection)

  productDao.save(livroNovo, (erro) => {
    if(!erro){
      res.redirect('/produtos')
    } else {
      res.render("erros/500", {erro: erro.message})
    }
  })
}

// const queryString = require("query-string")

// ProductController.criaBody = (req, res, next) => { 

//   let bodyString = ""
    
//   req.on("data", (chunk) => {
//     bodyString += chunk.toString()
//   })

//   req.on("end", bodyPronto)

//   function bodyPronto(){
//     req.body = queryString.parse(bodyString)
//     console.log("Criou o Body")
//     next()
//   }
// }

ProductController.show = (req, res) => {
  res.render('produtos/form.ejs')
}

module.exports = ProductController