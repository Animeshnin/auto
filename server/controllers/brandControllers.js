const uuid = require('uuid')
const path = require('path')
const ApiError = require('../error/ApiError')
const {Brand} = require("../moduls/moduls");
const {where} = require("sequelize");

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


    async getOne(req, res){
        const {id} = req.query
        console.log(`${id} это рек ${req.body}`)
        const brandsName = await Brand.findOne({where: {id}})
        return res.json(brandsName.name)
    }
}

module.exports =  new BrandControllers()