const {User} = require('./../models/User');

module.exports = (app) => {
    app.post('/api/users/create', (req,res) => {
        User.findOne({'email':req.body.params.email}).then((user) => {
            if(!user){
                var _user = new User({
                    name: req.body.params.name,
                    email: req.body.params.email,
                    password: req.body.params.password
                });
                _user.save().then(() => {
                    return _user.generateAuthToken();
                }).then((token) => {
                    res.header('x-auth',token).send({_user});
                });
            } else {
                res.status(400).send({'error':'user already exists'})
            }
        });

    });
};
