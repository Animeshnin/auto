const {clientOrder, AdditionalServices} = require("../moduls/moduls")
const ApiError = require("../error/ApiError");
const err = require("../error/ApiError");
const {where} = require("sequelize");

class ClientOrderController {
    async create(req, res, next) {
        try {
            const {name, login, phone,date, expirationDate, placeReceipt, price, additionalServices, autoName, brandName, img} = req.body
            const clientOrderRouter = await clientOrder.create(
                {
                    name, login, phone, date, expirationDate, placeReceipt, price, additionalServices, autoName, brandName, img
                })
            return res.json(clientOrderRouter)
        } catch (err){
            next(ApiError.badRequest(err.message))
        }
    }

    async getClientOrder(req, res, next){
        try {
            const {login} = req.params
            const clientOrderRouter = await clientOrder.findAndCountAll({where: {login}})
            return res.json(clientOrderRouter.rows)
        } catch (err){
            next(ApiError.badRequest(err.message))
        }
    }

    async statusConfirmation(req, res, next){
        try {
            const {id, status} = req.body
            // Пытаемся обновить запись в базе данных
            const updatedClientOrder = await clientOrder.update(
                { status: status }, // Новые данные для обновления
                { where: { id: id } } // Условие для поиска записи
            );

            // Проверяем, была ли обновлена хотя бы одна запись
            if (updatedClientOrder > 0) {
                // Если запись успешно обновлена, отправляем обновленные данные клиенту
                return res.json({ success: true, message: 'Заказ успешно обновлен' });
            } else {
                // Если не найдено записей для обновления
                return res.status(404).json({ success: false, message: 'Заказ не найден' });
            }
        } catch (err){
          next(ApiError.badRequest(err.message))
        }
    }
    async delete(req, res, next) {
        try {
            const {id} = req.params
            const auto = await clientOrder.findByPk(id)
            await auto.destroy()
            res.json(auto)
        } catch (err) {
            console.error('Ошибка при обновлении заказа:', error);
            return res.status(500).json({ success: false, message: 'Ошибка сервера' });

        }
    }

    async getAllClientOrder(req, res, next){
        const auto = await clientOrder.findAll()
        return res.json(auto)
    }
}

module.exports = new ClientOrderController()