module.exports = (app) => {
  app.get('/produtos', (req, res) => {
    res.render('produtos/lista.ejs')
  })

  app.get('/produtos/form', (req, res) => {
    res.render('produtos/form.ejs')
  })
}