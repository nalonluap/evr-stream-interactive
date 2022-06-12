const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');
class Users extends Model { }

Users.init({
    user: {
        type: DataTypes.STRING
    },
    active: {
        type: DataTypes.BOOLEAN,
        default: false
    },
    gameID: {
        type: DataTypes.UUIDV4
    }
}, {
    sequelize,
    modelName: 'users',
})

module.exports = Users;