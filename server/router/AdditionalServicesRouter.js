const additionalServices = require('../controllers/additionalServicesController')
const Router = require('express')
const router = new Router()

router.post('/create', additionalServices.create)
router.get('/', additionalServices.getAll)

module.exports = router // благодаря этой команды другие файлы могут импортировать и использовать данный маршрут
