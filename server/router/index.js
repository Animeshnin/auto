const Router = require('express')
const router = new Router()
const userRouter = require('./userRouter')
const autoRouters = require('./autoRouters')
const brandRouter = require('./brandRouter')
const transmissionRouter = require('./transmissionRouter')
const additionalServicesRouter = require('./AdditionalServicesRouter')
const {AdditionalServices} = require("../moduls/moduls");

router.use('/user', userRouter)
router.use('/auto', autoRouters)
router.use('/brand', brandRouter)
router.use('/transmission', transmissionRouter)
router.use('/additionalServices', additionalServicesRouter)

module.exports = router





