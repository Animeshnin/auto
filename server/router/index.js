const Router = require('express')
const router = new Router()
const userRouter = require('./userRouter')
const autoRouters = require('./autoRouters')
const brandRouter = require('./brandRouter')
const clientOrderRouter = require('./clientOrderRouter')
const transmissionRouter = require('./transmissionRouter')
const additionalServicesRouter = require('./AdditionalServicesRouter')

router.use('/user', userRouter)
router.use('/auto', autoRouters)
router.use('/brand', brandRouter)
router.use('/transmission', transmissionRouter)
router.use('/additionalServices', additionalServicesRouter)
router.use('/clientOrder', clientOrderRouter)

module.exports = router





