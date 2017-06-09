const mongoose = require('mongoose')
const Schema = mongoose.Schema

const RecipeSchema = new Schema({
  recipeImg: String,
  title: String,
  description: String,
  ingredients: [{
    ingredient: String,
    quantity: Number
  }]
})

const Recipe = mongoose.model('Recipe', RecipeSchema)

module.exports = Recipe


// var blogSchema = new Schema({
//   title:  String,
//   author: String,
//   body:   String,
//   comments: [{ body: String, date: Date }],
//   date: { type: Date, default: Date.now },
//   hidden: Boolean,
//   meta: {
//     votes: Number,
//     favs:  Number
//   }
// });