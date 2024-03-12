const autoControllers = require('../controllers/autoControllers')
const Router = require('express')
const router = new Router()

router.post('/create', autoControllers.create)
router.get('/', autoControllers.getAll)
router.get('/:ida', autoControllers.getOne)

module.exports = router // благодаря этой команды другие файлы могут импортировать и использовать данный маршрут
