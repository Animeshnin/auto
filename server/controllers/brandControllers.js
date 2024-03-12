const uuid = require('uuid')
const path = require('path')
const ApiError = require('../error/ApiError')
const {Brand} = require("../moduls/moduls");

class BrandControllers {
    async createBrand(req, res, next){
        let {name} = req.body
        const brand = await Brand.create({name})
        return res.json(brand)
    }

    async getAll(req, res, next){
        const brands = await Brand.findAll()
        return res.json(brands)
    }
}

module.exports =  new BrandControllers()