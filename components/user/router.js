const router = require ('express').Router();
const controller = require ('./controller.js');

router.post(('/'), controller.createUser)
router.get(('/_id:'), controller.getUser)

module.exports = router;