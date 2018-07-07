

module.exports = (app) => {
  app.post('/promocoes', (req, res) => {
    console.log(req.body)
    app.get('socket').emit("novaPromocao", {
      titulo: "Nova Promocao",
      msg: req.body.msg
    })

    res.redirect('/produtos')
  })
  
}