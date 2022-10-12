const {Sequelize, DataTypes} = require('sequelize')


const sequelize = new Sequelize('postgres://postgres:minato123@localhost:5432/test', {dialect: "postgres"})//code di line ini berfungsi untuk define connection ke database


async function authenticate(){
    await sequelize.authenticate().then(() => {
        console.log('connection established successfully')
    }).catch((err) => {
        console.log(err)
    })
}// coba connect ke database --> bikin izin dulu

const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize


//connecting to model
authenticate();

db.GameUsers = require('./GameUserModel') (sequelize, DataTypes);  //--> aku mau bikin table dengan informasi berikut
//exporting the module
module.exports = db