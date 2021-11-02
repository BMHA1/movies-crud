const router = require ('express').Router();
const controller = require ('./controller.js');

router.post(('/'), controller.createMovie)
router.get(('/search'), controller.getMovieCollection)
router.get(('/search/bytitle/:title'), controller.getMovieByTitle)
router.get(('/search/byobjectid/:_id'), controller.getMovieById)
// router.delete(('/delete/:_id'), controller.deleteMovie)

module.exports = router;