const router = require ('express').Router();
const controller = require ('./controller.js');

router.post(('/'), controller.createUser);
router.get(('/:id'), controller.getUserById);
router.get(('/'), controller.getUserByKey);
router.get(('/'), controller.getUserCollection);
// router.put(('/'), controller.modifyUser);
router.delete(('/:id'), controller.deleteUser)

module.exports = router;