module.exports = (app) => {
  const ProductController = require('../controller/ProductController')

  app.get('/produtos', ProductController.list)

  app.post('/produtos', ProductController.create)
  
  app.get('/produtos/form', ProductController.show)
}