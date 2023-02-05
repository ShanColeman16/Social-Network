const { User } = require.("../models");

const userController = {
getAllUsers(req,res){
    User.find({})
    .then((user)) => res.json(user)
    .catch((err)) => res.status(500).json((err));
    }
}, 

