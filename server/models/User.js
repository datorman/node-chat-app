const mongoose = require('mongoose');
const {Schema} = mongoose;

const UserSchema = new Schema({
    name:{
        type: String
    },
    password:{
        type: String
    },
    email:{
        type: String,
        unique: true
    }
});

var User = mongoose.model('User',UserSchema);
module.exports = {
    User
};