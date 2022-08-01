const {DataTypes} = require("sequelize");

module.exports = (sequelize) => {
    //define my User model
    return sequelize.define('users', {
        username: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        },
        password: {
            type: DataTypes.STRING
        }
    })
}