
const Router = require('express')
const BrandControllers = require("../controllers/brandControllers");
const router = new Router()

router.post('/', BrandControllers.createBrand)
router.get('/', BrandControllers.getAll)

module.exports = router