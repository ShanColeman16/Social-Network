const router = require('express').Router();

const {
    getAllUser,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    createReaction,
    deleteReaction
}   = require('../../controller/userControllers');

router.route('/').get(getAllUser).post(createUser);

router.route('/:UsersID')
.get(getUserById)
.put(updateUser)
.delete(deleteUser);

router.route('/:UsersID/reactions')
.post(createReaction);

router.route('/:UsersID/reactions/:reactionID')
.delete(deleteReaction);

module.exports = router;