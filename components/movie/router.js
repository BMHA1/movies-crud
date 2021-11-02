const router = require ('express').Router();
const controller = require ('./controller.js');

router.post(('/'), controller.createMovie);
router.get(('/search/byId/:id'), controller.getMovieById);
router.get(('/search'), controller.getMovieCollection);
router.get(('/search/bytitle/'), controller.getMovieByTitle);
// router.delete(('/delete/bytitle'), controller.deleteMovie);

module.exports = router;