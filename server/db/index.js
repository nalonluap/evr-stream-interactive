const path = require('path')
const { Sequelize } = require('sequelize');
const sequelize = new Sequelize("database",
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: path.join(__dirname, '..', 'data', './local.sqlite'),
        dialect: 'sqlite',
        pool: {
            max: 5,
            min: 0,
            idle: 10000
        }
    }
);


module.exports = sequelize;