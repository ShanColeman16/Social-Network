const { Thought } = require.("../models");

const ThoughtController = {
getAllThoughts(req,res){
    Thought.find({})
    .then((Thought)) => res.json(Thought)
    .catch((err)) => res.status(500).json((err));
    }
}, 
getThoughtById(req,res) {
    Thought.findOne({_id: req.params.ThoughtId })
    .populate("thoughts")
    .populate("friends")
    .then((Thought) =>
        !Thought ? res.status(404).json({ message: "No Thought found with that Id"}) 
        :res.json(Thought)
     )  
     .catch(( err) => res.status(500).json(err));
},
createThought(req,res) {
    Thought.create(req.body)
    .then((Thought) => res.json(Thought))
    .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
    });
},
updateThought(req, res) {
    Thought.findOneandUpdate(
        { _id: req.parms.ThoughtId },
        { $set: req.body },
        { runValidators: true, new: true }
    )
    .then((Thought) =>
        !Thought ? res.status(404).json({ message: "No Thought found with that Id"}) 
        :res.json(Thought)
     )  
     .catch(( err) => res.status(500).json(err));
},
addFriend(req, res) {
    Thought.findOneandUpdate(
        { _id: req.parmas.ThoughtId },
        { $addToSet: { friends: req.parmas.friendId } },
        { runValidators: true, new: true }
    )
    .then((Thought) =>
        !Thought ? res.status(404).json({ message: "No Thought found with that Id"}) 
        :res.json(Thought)
     )  
     .catch(( err) => res.status(500).json(err));
},
deleteFriend(req, res) {
    Thought.findOneandUpdate(
        { _id: req.parmas.ThoughtId },
        { $addToSet: { friends: req.parmas.friendId } },
        { new: true }
    )
    .then((Thought) =>
        !Thought ? res.status(404).json({ message: "No Thought found with that Id"}) 
        :res.json(Thought)
     )  
     .catch(( err) => res.status(500).json(err));
};