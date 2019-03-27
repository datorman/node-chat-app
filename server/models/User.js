const mongoose = require('mongoose');
const {Schema} = mongoose;
const bcrypt = require('bcryptjs');

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
    },
    tokens:[{
        access: {
            type: String,
            required : true
        },
        token: {
            type: String,
            required : true
        }
    }]
});

UserSchema.pre('save', function(next){
    var user = this;
    if(user.isModified('password')){
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(user.password, salt , (err,hash) => {
                user.password =  hash;
                next();
            });
        }); 
    } else {
        next();
    };

});
var User = mongoose.model('User',UserSchema);
module.exports = {
    User
};