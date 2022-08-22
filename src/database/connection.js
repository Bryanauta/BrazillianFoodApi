const Sequelize = require('sequelize');

const sequelize = new Sequelize('BrazillianFoodApi', 'root', 'admin', {
    dialect: 'mysql',
    host: 'localhost',
});

module.exports = sequelize;