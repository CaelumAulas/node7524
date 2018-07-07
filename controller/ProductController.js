const ProductDao = require('../dao/ProductDao')
const connectionFactory = require('../infra/connectionFactory')

const ProductController = {}


ProductController.list = (req, res, next) => {
  const connection = connectionFactory()
  const productDao = new ProductDao(connection)

  productDao.list((error, livros, fields) => {
    if(!error){

      res.format({
        html: () => res.render('produtos/lista.ejs', { livros:  livros }),
        json: () => res.send(livros)
      })

    } else {
      next(error.message)
    }
  })

  // productDao.list()
  //   .then(() => res.render('produtos/lista.ejs', { livros:  livros }))
  //   .catch((error) => next(error.message))

  connection.end()
}

ProductController.create = (req, res, next) => {
  const livroNovo = req.body

  req.assert('titulo', "Título vazio").notEmpty()
  req.assert('preco', "Preco inválido").isNumeric()
  
  // retorna uma promise
  const promiseValidacao = req.asyncValidationErrors()

  promiseValidacao
    .then(() => {
      const connection = connectionFactory()
      const productDao = new ProductDao(connection)
    
      productDao.save(livroNovo, (erro) => {
          if(!bla){
            res.redirect('/produtos')
          } else {
            next(erro.message)
          }
      })
    })
    .catch((erros) => {
      res
        .status(400)
        .render('produtos/form.ejs', {validationErrors: erros})
    })

}

ProductController.show = (req, res) => {
  res.render('produtos/form.ejs', {validationErrors: []})
}

module.exports = ProductController