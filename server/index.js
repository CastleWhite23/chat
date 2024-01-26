
// const app = require("express")()
// const server =  require("http").createServer(app)
// const io =  require("socket.io")(server, )

const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);

const io = require("socket.io")(server, {
    cors: {
        origin: "http://localhost:5173",
        methods: ["GET", "POST"]
    }
});


io.on('connection', (socket) => {
    console.log('a user connected', socket.id);

    socket.on('disconnect', (reason) => {
        console.log("User desconectado", socket.id)
    })

    //para receber emits
    socket.on('set_username', (username) => {
        socket.data.username = username
        console.log("Usuario conectado", socket.data.username);
    })

    socket.on('message', (message) => {
        socket.data.message = message
        console.log(`Usuario: ${socket.data.username}; Mensagem: ${socket.data.message}`);
        
        io.emit('returnData', {
            authorId: socket.id,
            author: socket.data.username,
            message: socket.data.message
        })
    })


});

const PORT = 3001;

server.listen(PORT, (error) => {
    if (error) {
        console.log(error)
    }

    console.log(`Servidor rodando http://localhost:${PORT}`)
})