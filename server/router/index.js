const Router = require('express')
const router = new Router()
const userRouter = require('./userRouter')
const autoRouters = require('./autoRouters')
const brandRouter = require('./brandRouter')
const transmissionRouter = require('./transmissionRouter')

router.use('/user', userRouter)
router.use('/auto', autoRouters)
router.use('/brand', brandRouter)
router.use('/transmission', transmissionRouter)

module.exports = router





