const path = require('path');
const http = require('http');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const socketIO = require('socket.io');


const keys = require('./config/keys');
const{generateMessage,generateLocationMessage} = require('./utils/message');
const {isRealString} = require('./utils/validation');
const {Users} = require('./utils/users');

const publicPath = path.join(__dirname, '../client');
const port = process.env.PORT || 5000;

mongoose.connect(keys.mongoURI);

require('./models/Room');

var app = express();
app.use(bodyParser.json());
var server = http.createServer(app);
var io = socketIO(server);

var users = new Users();



io.on('connection', (socket) => {
    console.log('New user connected');
    socket.on('join', (params, callback) => {
        // Once joined we need to store that user has joined the room.
        socket.join(params.room);
        users.removeUser(socket.id);
        users.addUser(socket.id,params.name,params.room);

        io.to(params.room).emit('updateUserList', users.getUserList(params.room));
        socket.emit('newMessage',generateMessage('Admin','Welcome to the Chat app'));
        socket.broadcast.to(params.room).emit('newMessage',generateMessage('Admin',`${params.name} has joined the room.`));

        callback();
    });
    socket.on('createMessage', (newMessage, callback)=>{
        var user = users.getUser(socket.id)[0];
        if(user && isRealString(newMessage.text)){
            io.to(user.room).emit('newMessage', generateMessage(user.name,newMessage.text));
        }
        callback();
    });
    socket.on('disconnect', () => {
        var user = users.removeUser(socket.id)[0];
        if(user){
            io.to(user.room).emit('updateUserList',users.getUserList(user.room));
            io.to(user.room).emit('newMessage',generateMessage('Admin',`${user.name} has left the room.`));
        }
    });
});

app.use(express.static(publicPath));

// Api Routes for Handling Rest part of app
require('./routes/RoomRoutes')(app);
require('./routes/UserRoutes')(app);
require('./routes/MessageRoutes')(app);


server.listen(port, () => {
    console.log(`App is runnin on port ${port}`); 
});
