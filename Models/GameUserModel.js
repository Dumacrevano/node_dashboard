module.exports = (sequelize, DataTypes) => {
    const GameUser = sequelize.define( "GameUser", {
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }

    }, {timestamps: true}, )
    return GameUser
 }