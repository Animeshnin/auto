const Router = require("express");
const clientOrderController = require('../controllers/clientOrderController')
const router = new Router()

router.post('/createClientOrder', clientOrderController.create)
router.get('/:login', clientOrderController.getClientOrder)
router.delete('/delete/:id', clientOrderController.delete)
router.get('/', clientOrderController.getAllClientOrder)
router.put('/createClientOrderPut', clientOrderController.statusConfirmation)


module.exports = router
