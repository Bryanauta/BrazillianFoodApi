const Food = require('../models/Food');

class FoodController {

    async readAllRecipes(req, res) {
        try {
            var users = await Food.findAll();
    
            res.json(users);
        } catch(err) {
            console.log(err);
        }
    }

    async readOneRecipe(req, res) {
        try {
            var id = req.params.id;
            var user = await Food.findOne({id});

            res.json(user)
        } catch(err) {
            console.log(err);
        }
    }

    async addRecipe(req, res) {
        var {name, history, recipe} = req.body;

        if(!name) {
            res.status(400).send('Invalid name!');
            return;
        }

        if(!history) {
            res.status(400).send('Invalid history!');
            return;
        }

        if(!recipe) {
            res.status(400).send('Invalid recipe!');
            return;
        }

        await Food.create({name, history, recipe});
        res.status(200).send('Recipe added!');
    }

    async removeRecipe(req, res) {
        try {
            var id = req.params.id;

            var result = await Food.destroy({where:{id}});

            if(result) {
                res.status(200).send(`Recipe ${id} removed!`);
            } else {
                res.status(400).send(`Error to delete recipe ${id}`);
            }
        } catch(err) {
            console.log(err);
        }
    }

    async updateRecipe(req, res) {
        try {
            var id = req.params.id;
            var {name, history, recipe} = req.body;
            var result = await Food.update({name, history, recipe},{where:{id}});

            if(result) {
                res.status(200).send(`Recipe ${id} updated!`);
            } else {
                res.status(400).send(`Error to update recipe ${id}`);
            }
        } catch(err) {
            console.log(err);
        }
    }

}

module.exports = new FoodController();