const {User} = require('./../models/User');

module.exports = (app) => {
    app.post('/api/users/create', (req,res) => {
        User.findOne({'email':req.body.email}).then((user) => {
            if(!user){
                var _user = new User({
                    name: req.body.name,
                    email: req.body.email,
                    password: req.body.password
                });
                _user.save().then((newUser) => {
                    res.send(newUser);
                });
            } else {
                res.status(400).send({'error':'user already exists'})
            }
        });

    });
};
