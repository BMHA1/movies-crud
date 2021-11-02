const router = require ('express').Router();
const controller = require ('./controller.js');

router.post(('/'), controller.createMovie);
router.get(('/search'), controller.getMovieCollection);
router.get(('/search/bytitle/'), controller.getMovieByTitle);
router.get(('/search/:_id'), controller.getMovieById);
// router.delete(('/delete/:_id'), controller.deleteMovie)

module.exports = router;