const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');
class GameWords extends Model { }

GameWords.init({
    query: {
        type: DataTypes.STRING
    },
    answers: {
        type: DataTypes.STRING
    }
}, {
    sequelize,
    modelName: 'gamewords'
})


module.exports = GameWords;