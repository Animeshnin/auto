
const ApiError = require('../error/ApiError')
const {AdditionalServices} = require("../moduls/moduls")

class AdditionalServicesController {
    async create(req, res, next){
        try{
            let {name, price} = req.body
            const additionalServices = await AdditionalServices.create(
                {name, price}
            )
            return res.json(additionalServices)
        } catch (err){
            next(ApiError.badRequest(err.message))
        }
    }
    async getAll(req, res) {
        let additionalServices = await AdditionalServices.findAll()
        return res.json(additionalServices)
    }

    async getOne(req, res){
        try {
            let id = req.body
            let auto = await AdditionalServices.findOne({where: {id}})
            return res.json(auto)
        } catch (err){

        }
    }
}

module.exports = new AdditionalServicesController()