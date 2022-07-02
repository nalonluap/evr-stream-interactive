const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');
class Users extends Model { }

Users.init({
    user: {
        type: DataTypes.STRING,
        unique: true,
    },
    active: {
        type: DataTypes.BOOLEAN,
        default: false
    },
    gameID: {
        type: DataTypes.UUIDV4
    },
    socketID: {
        type: DataTypes.STRING
    }
}, {
    sequelize,
    modelName: 'users',
})

module.exports = Users;