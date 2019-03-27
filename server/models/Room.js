const mongoose = require('mongoose');
const {Schema} = mongoose;

const RoomSchema = new Schema({
    name:{
        type: String,
        unique: true
    },
    password:{
        type: String,
        default: '',
        select: false
    }
});

var Room = mongoose.model('Room',RoomSchema);
module.exports = {
    Room
};