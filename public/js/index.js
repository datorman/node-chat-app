var socket = io();

socket.on('connect', function(){
    console.log('connected to server');
});
socket.on('disconnect', function(){
    console.log('disconnected from server');
});

socket.on('userWelcome', function(message){
    console.log('User welcome',message);
});
socket.on('userJoined',function(message){
    console.log('User joined the channel',message);
});
socket.on('newMessage',function (message){
    console.log('new message', message)
});