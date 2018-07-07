const http = require("http")
const socketio = require("socket.io")



const app = require('./custom-express')()
const port = 8080


const server = http.Server(app)


const socket = socketio(server)
app.set("socket", socket)

server.listen(port, () => {
  console.log('Servidor de pé em http://localhost:' + port)
  console.log('Pra derrubar o servidor: ctrl + c')
})