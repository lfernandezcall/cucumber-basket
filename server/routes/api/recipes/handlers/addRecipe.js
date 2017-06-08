const Recipe = require('../../../../models/Recipe')

function addRecipe (req, res) {
  const {recipeImg, title, description} = req.body
  const newRecipe = new Recipe({recipeImg, title, description})
  console.log(newRecipe)
  newRecipe.save()
    .then(msg => {
      res.json(msg)
    }
  )
}

module.exports = addRecipe
