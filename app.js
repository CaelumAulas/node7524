const port = 8080
const server = require('./custom-express')(port)

server.app.listen(port, () => {
  console.log('Servidor de pé em http://localhost:' + port)
  console.log('Pra derrubar o servidor: ctrl + c')
})