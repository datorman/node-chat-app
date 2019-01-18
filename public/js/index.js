var socket = io();

socket.on('connect', function(){
    console.log('connected to server');

    socket.emit('createEmail',{
        to:'email@email.com',
        body:'hello from index'
    });
    socket.emit('createMessage',{
        from:'from me',
        text:'my message'
    });
});
socket.on('disconnect', function(){
    console.log('disconnected from server');
});

socket.on('newEmail',function (email) {
    console.log('New Email',email);
});

socket.on('newMessage',function (message){
    console.log('new message', message)
});