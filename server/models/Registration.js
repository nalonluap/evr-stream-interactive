const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');
class Registration extends Model { }

Registration.init({
    channel: {
        type: DataTypes.STRING
    },
    username: {
        type: DataTypes.STRING,
    }
}, {
    sequelize,
    modelName: 'registration',
    timestamps: false,
    createdAt: false,
    updatedAt: false,
})


module.exports = Registration;