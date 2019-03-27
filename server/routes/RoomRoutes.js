const {Room} = require('./../models/Room');

module.exports = (app) => {
    app.post('/api/rooms/create', (req,res) => {
        Room.findOne({'name':req.body.name}).then((room) => {
            if(!room){
                var room = new Room({
                    name:req.body.name,
                    password:req.body.pasasword
                });
                room.save().then((room)=>{
                    res.send({room});
                }, (error) => {
                    res.status(400).send({error});
                });
            } else {
                res.status(400).send({error:"Room Already Exists."});
            }
        });
    });
    app.get('/api/rooms/list' , (req,res) => {
        Room.find().then((rooms) => {
            res.send(rooms);
        });
    });
};