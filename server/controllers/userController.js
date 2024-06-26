const jwt = require('jsonwebtoken')
const  bcrypt = require('bcrypt')
const ApiError = require('../error/ApiError')
const {Client, Basket, Device} = require('../moduls/moduls')
const err = require("../error/ApiError");

const generateJwt = (id, email, role, name, phone, login)=> {
    return jwt.sign({
        id, email, role, name, phone, login},
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    )
}

class UserControllers {
   async registration(req, res, next){
       try {
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
           const token = generateJwt(client.id, client.email, client.role, client.fio, client.phone, client.login)


           return res.json({token})
       } catch (e){
           next(ApiError.badRequest(e.message))
       }

   }

   async login(req, res, next){
        const {email, login, password} = req.body
        const client = await Client.findOne({where: {email}})
        const clientLogin = await Client.findOne({where: {login}})
        if(!client || !clientLogin){
            return next(ApiError.badRequest("Пользователь с таким логином или e-mail не существует"))
        }
       let comparePassword = bcrypt.compare(password, client.password)

        if(!comparePassword){
            return next(ApiError.badRequest('Указан неверный пароль'))
        }
       const token = generateJwt(client.idc, client.email, client.role, client.fio,  client.phone, client.login)
       return res.json({token})

   }
    async check(req, res, next){
       if (req === null){
           return
       } else {
           const token = generateJwt(req.user.id, req.user.email, req.user.role)
           return res.json({token})
       }

    }

    async deleteAdmin(req, res, next){
       try {
           const {id} = req.params
           const client = await Client.findByPk(id)
           await client.destroy()
           res.json(client)
       } catch (err){
           next(ApiError.badRequest(err.message))
       }
    }

    async getAllAdmin(req, res){
        let client = await Client.findAndCountAll({where: {role:'ADMIN'}})
        client = client.rows
        return res.json(client)
    }


}

module.exports = new UserControllers()
