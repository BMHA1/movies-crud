const router = require ('express').Router();
const controller = require ('./controller.js');

router.post(('/'), controller.createMovie)
router.get(('/'), controller.getMovieCollection)
router.get(('/_id'), controller.getMovie)
// router.delete(('/'), controller.deleteMovie)

module.exports = router;