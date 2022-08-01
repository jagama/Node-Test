const {DataTypes} = require("sequelize");
module.exports = (sequelize, Sequelize) => {
    return sequelize.define('roles', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING
        }
    })
}
