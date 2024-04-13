const autoControllers = require('../controllers/autoControllers')
const Router = require('express')
const router = new Router()

router.post('/create', autoControllers.create)
router.get('/', autoControllers.getAll)
router.get('/:ida/:brandId', autoControllers.getOne)
router.delete('/delete/:id', autoControllers.deleteAuto)

module.exports = router // благодаря этой команды другие файлы могут импортировать и использовать данный маршрут
