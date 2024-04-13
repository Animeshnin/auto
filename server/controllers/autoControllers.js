const uuid = require('uuid')
const path = require('path')
const ApiError = require('../error/ApiError')
const {Auto, AutoSlideBar} = require("../moduls/moduls");

class AutoControllers {
    async create(req, res, next){
        try {
            let {name, run, price, place, yearOfIssue, description, driveUnit,brandId, transmissionId} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', fileName))
            const auto = await Auto.create(
                { name, run, price, place, yearOfIssue, description, driveUnit, img: fileName, brandId, transmissionId}
            )
            const {sliderImage} = req.files
            if (sliderImage) {
                let sliderFileName = ''
                sliderImage.forEach(i =>
                {
                    sliderFileName = uuid.v4() + ".jpg"
                    i.mv(path.resolve(__dirname,'..', 'static', sliderFileName))
                    AutoSlideBar.create({
                        sliderImg: sliderFileName,
                        autoIda: auto.ida
                    })
                })
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
        const {brandId} = req.params
        const auto = await Auto.findOne(
            {
                where: {ida},
                include: [{model: AutoSlideBar, as: 'slider'}]
            })
        return res.json(auto)
    }
    async deleteAuto(req, res, next){
        try {
            const {id} = req.params
            const auto = await Auto.findByPk(id)
            await auto.destroy()
            res.json(auto)

        } catch (err){
            next(ApiError.badRequest(err.message))

        }
    }
}

module.exports = new AutoControllers()
