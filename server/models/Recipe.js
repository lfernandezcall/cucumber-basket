const mongoose = require('mongoose')
const Schema = mongoose.Schema

const RecipeSchema = new Schema({
    recipeImg: {
        type: String
    },
    title: {
        type: String
    },
    description: {
        type: String
    }
})

const Recipe = mongoose.model('Recipe', RecipeSchema)

module.exports = Recipe
