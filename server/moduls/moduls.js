const sequelize = require('../db')
const {DataTypes} = require('sequelize')


const Client = sequelize.define('client', {
    idc: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    fio: {type: DataTypes.STRING},
    passport: {type: DataTypes.STRING, unique: true },
    phone: {type: DataTypes.STRING, unique: true},
    email: {type: DataTypes.STRING, unique: true},
    login: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING}
})

const Auto = sequelize.define('auto', {
    ida: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING},
    run: {type: DataTypes.STRING, allowNull: false},
    price: {type: DataTypes.STRING, allowNull: false},
    img: {type: DataTypes.STRING, allowNull: false},
    place: {type: DataTypes.INTEGER},
    yearOfIssue: {type: DataTypes.INTEGER},
    description: {type: DataTypes.TEXT },
    driveUnit: {type: DataTypes.STRING, allowNull: false}
})

const AutoSlideBar = sequelize.define('autoSlideBar', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    sliderImg: {type: DataTypes.STRING, allowNull: false},
})

const AdditionalServices = sequelize.define('additionalServices', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    price: {type: DataTypes.INTEGER, allowNull: false}

})

const Manager = sequelize.define('manager', {
    idm: {type: DataTypes.INTEGER,primaryKey: true, autoIncrement: true},
    fio: {type: DataTypes.STRING},
    job: {type: DataTypes.STRING},
    login: {type: DataTypes.STRING},
    password: {type: DataTypes.STRING}
})

const Transmission = sequelize.define('transmission', {
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false}
})

const Brand= sequelize.define('brand', {
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false}
})

Transmission.hasMany(Auto)
Auto.belongsTo(Transmission)

Brand.hasMany(Auto)
Auto.belongsTo(Brand)

Auto.hasMany(AutoSlideBar, {as: "slider"});
AutoSlideBar.belongsTo(Auto)



module.exports = {
    Auto,
    Manager,
    Client,
    Brand,
    Transmission,
    AdditionalServices,
    AutoSlideBar

}