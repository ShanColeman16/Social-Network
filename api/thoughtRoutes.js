const router = require('express').Router();

const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    createReaction,
    deleteReaction
}   = require('../../controllers/thoughtController');

router.route('/').get(getThought).post(createThought);

