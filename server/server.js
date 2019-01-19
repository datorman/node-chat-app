const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const{generateMessage,generateLocationMessage} = require('./utils/message');
const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

var app = express();
var server = http.createServer(app);
var io = socketIO(server);

io.on('connection', (socket) => {
    console.log('New user connected');
    
    socket.emit('newMessage',generateMessage('Admin','Welcome to the Chat app'));
    socket.broadcast.emit('newMessage',generateMessage('Admin','New user joined the channel'));

    socket.on('createMessage', (newMessage, callback)=>{
        io.emit('newMessage', generateMessage(newMessage.from,newMessage.text));
        callback();
    });

    socket.on('createLocationMessage', (coords) => {
        io.emit('newLocationMessage', generateLocationMessage('Admin', coords.latitude, coords.longitude))
    });
    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});

app.use(express.static(publicPath));


server.listen(port, () => {
    console.log(`App is runnin on port ${port}`); 
});