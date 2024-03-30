const uuid = require('uuid')
const path = require('path')
const ApiError = require('../error/ApiError')
const {Auto, AutoSlideBar} = require("../moduls/moduls");

class AutoControllers {
    async create(req, res, next){
        try {
            let {name, run, price, place, yearOfIssue, description, driveUnit,brandId, transmissionId, slider} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', fileName))
            const auto = await Auto.create(
                { name, run, price, place, yearOfIssue, description, driveUnit, img: fileName, brandId, transmissionId}
            )

            if (slider){
                slider = JSON.parse(slider)

                slider.forEach(i =>
                    AutoSlideBar.create(
                        {
                            sliderImg: i.fileName,
                            autoIda: auto.id
                        }
                    ))
            }
            return res.json(auto)
        } catch (err){
            next(ApiError.badRequest(err.message))
        }
    }
    async getAll(req, res){
        let autos = await Auto.findAll()
        return res.json(autos)
    }

    async getOne(req, res, next){
        const {ida} = req.params
        const auto = await Auto.findOne({where: {ida}})
        return res.json(auto)
    }

}

module.exports = new AutoControllers()
