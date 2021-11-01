const router = require ('express').Router();
const controller = require ('./controller.js');

router.post(('/'), controller.createMovie)
router.get(('/_id:'), controller.getMovie)

module.exports = router;