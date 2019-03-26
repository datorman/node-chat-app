const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

// Need to add mongoose mongodb and create models for USERS ROOMS and MESSAGES
// Need to get Mongodb localhost from file

const{generateMessage,generateLocationMessage} = require('./utils/message');
const {isRealString} = require('./utils/validation');
const {Users} = require('./utils/users');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

var app = express();
var server = http.createServer(app);
var io = socketIO(server);

var users = new Users();

io.on('connection', (socket) => {
    console.log('New user connected');
    


    socket.on('join', (params, callback) => {
        if(!isRealString(params.name) || !isRealString(params.room)){
            return callback('Name and Room name are required.');
        }
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

    socket.on('createLocationMessage', (coords) => {
        var user =users.getUser(socket.id)[0];
        if(user){
            io.to(user.room).emit('newLocationMessage', generateLocationMessage('Admin', coords.latitude, coords.longitude))
        }
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

// APP POST needed here for creation of rooms
// On submit create room if room does not already exist.

// APP GET needed for getting a list of all rooms to prefill dropdown for user.


// APP POST needed here for registration
// On submit check if user exists and if not then create new user and return user + auth token.


// APP POST needed here for sign in
// If valid credentials then return auth token + user info


server.listen(port, () => {
    console.log(`App is runnin on port ${port}`); 
});
