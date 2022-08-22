const Sequelize = require('sequelize');
const connection = require('../database/connection');

const Food = connection.define('foods', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    history: {
        type: Sequelize.STRING,
        allowNull: false
    },
    ingredients: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    recipe: {
        type: Sequelize.TEXT,
        allowNull: false
    }
});

Food.sync({force: true});

module.exports = Food;