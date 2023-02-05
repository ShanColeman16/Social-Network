const { User } = require.("../models");

const userController = {
getAllUsers(req,res){
    User.find({})
    .then((user)) => res.json(user)
    .catch((err)) => res.status(500).json((err));
    }
}, 
getUserById(req,res) {
    User.findOne({_id: req.params.userId })
    .populate("thoughts")
    .populate("friends")
    .then((user) =>
        !user ? res.status(404).json({ message: "No user found with that Id"}) 
        :res.json(user)
     )  
     .catch(( err) => res.status(500).json(err));
},


