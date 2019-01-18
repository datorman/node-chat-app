const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

var app = express();
var server = http.createServer(app);
var io = socketIO(server);

io.on('connection', (socket) => {
    console.log('New user connected');
    
    socket.emit('userWelcome', {
        from: 'Admin',
        text: 'Welcome to the Chat app',
        createdAt: new Date().getTime()
    });
    socket.broadcast.emit('userJoined',{
        from: 'Admin',
        text: 'New user joined the channel',
        createdAt: new Date().getTime()
    });

    socket.on('createMessage', (newMessage)=>{
        console.log('created message',newMessage);
        io.emit('newMessage', {
            from: newMessage.from,
            text: newMessage.text,
            createdAt: new Date().getTime()
        });
        // socket.broadcast.emit('newMessage', {
        //     from: newMessage.from,
        //     text: newMessage.text,
        //     createdAt: new Date().getTime()    
        // }); 
    });

    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});

app.use(express.static(publicPath));


server.listen(port, () => {
    console.log(`App is runnin on port ${port}`); 
});