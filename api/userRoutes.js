const router = require('express').Router();

const {
    getAllUsers,
    getUsersById,
    createUsers,
    updateUsers,
    deleteUsers,
    createReaction,
    deleteReaction
}   = require('../../controllers/UsersController');

router.route('/').get(getUsers).post(createUsers);

router.route('/:UsersID')
.get(getSingleUsers)
.put(updateUsers)
.delete(deleteUsers);

router.route('/:UsersID/reactions')
.post(createReaction);

router.route('/:UsersID/reactions/:reactionID')
.delete(deleteReaction);

module.exports = router;