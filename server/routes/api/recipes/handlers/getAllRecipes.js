const Recipe = require('../../../../models/Recipe')

function getAllRecipes (req, res) {
  Recipe.find()
    .then(msg => {
      res.json(msg)
    })
}

module.exports = getAllRecipes

