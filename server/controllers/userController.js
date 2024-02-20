const jwt = require('jsonwebtoken')
const  bcrypt = require('bcrypt')
const ApiError = require('../error/ApiError')
const {Client, Basket, Device} = require('../moduls/moduls')

const generateJwt = (id, email, role)=> {
    return jwt.sign({
        id, email, role},
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    )
}

class UserControllers {
   async registration(req, res, next){
    const {fio, passport, phone, email, login, password, role} = req.body
       if(!email || !password) {
           return next(ApiError.badRequest('Некорректный email или пароль'))
       }

       const candidateMail = await Client.findOne({where: {email}});
       const candidateNumberPhone = await Client.findOne({where: {phone}});
       const candidatePassport = await Client.findOne({where: {passport}})
       const candidateLogin = await Client.findOne({where: {login}})
       if(candidateMail){
            return next(ApiError.badRequest('Пользователь с таким email уже существуте'))
       }
       if(candidateNumberPhone){
           return next(ApiError.badRequest('Пользователь с таким номером телефона уже существуте'))
       }
       if(candidatePassport){
           return next(ApiError.badRequest('Пользователь с таким номером паспорта уже существуте'))
       }
       if(candidateLogin){
           return next(ApiError.badRequest('Пользователь с таким логином уже существуте'))
       }
       const hashPassword = await bcrypt.hash(password, 5)
    const client = await Client.create({fio, passport, email, login, phone, password: hashPassword, role})
       const token = generateJwt(client.id, client.email, client.role)

       return res.json({token})
   }

   async login(req, res, next){
        const {email, login, password} = req.body
        const client = await Client.findOne({where: {email}})
        const clientLogin = await Client.findOne({where: {login}})
        if(!client || !clientLogin){
            return next(ApiError.badRequest("Пользователь с таким логином или e-mail не существует"))
        }
       const token = generateJwt(client.id, client.email, client.role)
       return res.json({token})

   }
    async check(req, res, next){
        let main = req.user.email
        const token = generateJwt(req.user.id, req.user.email, req.user.role)
        return res.json({token})
    }


}

module.exports = new UserControllers()
