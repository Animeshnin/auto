const {clientOrder, AdditionalServices} = require("../moduls/moduls")
const ApiError = require("../error/ApiError");

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
    async delete(req, res, next) {
        try {
            const {id} = req.params
            console.log(`ыждвж ${id}`)
            const auto = await clientOrder.findByPk(id)
            await auto.destroy()
            res.json(auto)
        } catch (err) {
            next(ApiError.badRequest(err.message))

        }
    }

    async getAllClientOrder(req, res, next){
        const auto = await clientOrder.findAll()
        return res.json(auto)
    }
}

module.exports = new ClientOrderController()