const express = require('express');
const FoodController = require('../controller/FoodController');
const Router = express.Router();

Router.get('/foods', FoodController.readAllRecipes);
Router.get('/food/:id', FoodController.readOneRecipe);
Router.post('/foods', FoodController.addRecipe);
Router.delete('/food/:id', FoodController.removeRecipe);
Router.put('/food/:id', FoodController.updateRecipe);

module.exports = Router;