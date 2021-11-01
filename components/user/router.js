const router = require ('express').Router();
const controller = require ('./controller.js');

router.post(('/'), controller.createUser)
router.get(('/search/_id:'), controller.getUserById)
// router.delete(('/'), controller.deleteUser)

module.exports = router;