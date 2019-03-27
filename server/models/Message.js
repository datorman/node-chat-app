const mongoose = require('mongoose');
const {Schema} = mongoose;

const MessageSchema = new Schema({
    body:{
        type: String,
        unique: true
    },
    createDate:{
        type: Number
    },
    author:{
        type: Schema.Types.ObjectId, ref: 'User',
        required: true
    },
    room:{
        type: Schema.Types.ObjectId, ref: 'Room',
        required: true
    }
});

var Message = mongoose.model('message',MessageSchema);
module.exports = {
    Message
};