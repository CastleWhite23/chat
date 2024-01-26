
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

    socket.on('set_username', (username)=>{
        socket.data.username = username
        console.log("vai curintia", socket.data.username);
    })
});

const PORT = 3001;

server.listen(PORT, (error) => {
    if (error) {
        console.log(error)
    }

    console.log(`Servidor rodando http://localhost:${PORT}`)
})