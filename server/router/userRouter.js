const Router = require('express')
const router = new Router()
const userControllers = require('../controllers/userController')
const authMiddleware = require('../middleware/authMiddleware')

router.post('/registration', userControllers.registration)
router.post('/login', userControllers.login)
router.get('/auth',authMiddleware, userControllers.check)
router.delete('/deleteAdmin/:id', userControllers.deleteAdmin)
router.get('/getAllAdmin/', userControllers.getAllAdmin)




module.exports = router