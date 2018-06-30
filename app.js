const app = require('./custom-express')()
const port = 8080

app.listen(port, () => {
  console.log('Servidor de pé em http://localhost:' + port)
  console.log('Pra derrubar o servidor: ctrl + c')
})