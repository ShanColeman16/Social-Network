const router = require('express').Router();

const {
    getAllThought,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    createReaction,
    deleteReaction
}   = require('../../controllers/thoughtController');

router.route('/').get(getAllThought).post(createThought);

router.route('/:thoughtID')
.get(getThoughtById)
.put(updateThought)
.delete(deleteThought);

router.route('/:thoughtID/reactions')
.post(createReaction);

router.route('/:thoughtID/reactions/:reactionID')
.delete(deleteReaction);

module.exports = router;