const {Transmission} = require("../moduls/moduls");

class TransmissionControllers {
    async getAll(req,res){
        const transmission = await Transmission.findAll()
        return res.json(transmission)
    }
}

module.exports = new TransmissionControllers()