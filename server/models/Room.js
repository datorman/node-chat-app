const mongoose = require('mongoose');
const {Schema} = mongoose;

const RoomSchema = new Schema({
    name:{
        type: String,
        unique: true
    }
});

var Room = mongoose.model('room',RoomSchema);
module.exports = {
    Room
};