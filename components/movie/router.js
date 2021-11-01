const router = require ('express').Router();
const controller = require ('./controller.js');

router.post(('/'), controller.createMovie)
router.get(('/search'), controller.getMovieCollection)
router.get(('/search/:title'), controller.getMovieByTitle)
router.get(('/search/:_id'), controller.getMovieById)
// router.delete(('/'), controller.deleteMovie)

module.exports = router;