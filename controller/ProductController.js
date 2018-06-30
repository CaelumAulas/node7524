const ProductDao = require('../dao/ProductDao')
const connectionFactory = require('../infra/connectionFactory')

const ProductController = {}

ProductController.list = (req, res) => {
  const connection = connectionFactory()
  const productDao = new ProductDao(connection)

  productDao.list((error, livros, fields) => {
    res.render('produtos/lista.ejs', { livros:  livros })
  })

  connection.end()
}

ProductController.show = (req, res) => {
  res.render('produtos/form.ejs')
}

module.exports = ProductController