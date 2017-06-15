const Recipe = require('../../../../models/Recipe')

function getRecipeById (req, res) {
	const id = req.params.id
  Recipe.findById(id)
    .then(recipe => res.json(recipe) )
}

module.exports = getRecipeById

