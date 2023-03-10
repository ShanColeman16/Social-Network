const { User } = require('../models/User');

module.exports = {
  getUser(req, res) {
    User.find({})
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
},
  getUserById(req, res) {
    User.findOne({ _id: req.params.userId })
      .populate("thoughts")
      .populate("friends")
      .select('-__v')
      .then((user) =>
        !user ? res.status(404).json({ message: "No user found with that Id" })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
},
  createUser(req, res) {
    User.create(req.body)
      .then((user) => res.json(user))
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
},
  updateUser(req, res) {
    User.findOneandUpdate(
      { _id: req.parms.userId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((user) =>
        !user ? res.status(404).json({ message: "No user found with that Id" })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
  addFriend(req, res) {
    User.findOneandUpdate(
      { _id: req.parmas.userId },
      { $addToSet: { friends: req.parmas.friendId } },
      { runValidators: true, new: true }
    )
      .then((user) =>
        !user ? res.status(404).json({ message: "No user found with that Id" })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
  deleteFriend(req, res) {
    User.findOneandUpdate(
      { _id: req.parmas.userId },
      { $addToSet: { friends: req.parmas.friendId } },
      { new: true }
    )
      .then((user) =>
        !user ? res.status(404).json({ message: "No user found with that Id" })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
 
   },


};
