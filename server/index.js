
const app = require("express")()
const server =  require("http").createServer(app)
const io =  require("socket.io")(server, {cors: {origin: 'http://localhost:5173/ '}})

const PORT = 8081;

io.on('connection', socket => {
    console.log('usuario conectado', socket.id)
})


server.listen(PORT, (error)=>{
    if(error){
        console.log(error)
    }

    console.log(`Servidor rodando http://localhost:${PORT}`)
})