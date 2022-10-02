const {Sequelize, DataTypes} = require('sequelize')

const sequelize = new Sequelize('postgres://postgres:minato123@localhost:5432/test', {dialect: "postgres"})


async function authenticate(){
    await sequelize.authenticate().then(() => {
        console.log('connection established successfully')
    }).catch((err) => {
        console.log(err)
    })
}

const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize


//connecting to model
authenticate();

db.GameUsers = require('./GameUserModel') (sequelize, DataTypes);

//exporting the module
module.exports = db