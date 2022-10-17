module.exports = (sequelize, DataTypes) => {
    const GameUser = sequelize.define( "GameUser", {
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        score: {
            type: DataTypes.INTEGER,
            allowNull: true,
            defaultValue: 0
        }

    }, {timestamps: true}, )
    return GameUser
 }