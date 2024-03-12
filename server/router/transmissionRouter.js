const Router = require('express')
const transmissionControllers = require("../controllers/transmissionControllers");
const router = new Router()

router.get('/', transmissionControllers.getAll)

module.exports = router
