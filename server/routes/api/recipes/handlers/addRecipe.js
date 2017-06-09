const Recipe = require('../../../../models/Recipe')

function addRecipe (req, res) {
  const {recipeImg, title, description, ingredients} = req.body
  const newRecipe = new Recipe({recipeImg, title, description, ingredients})
  console.log(newRecipe)
  newRecipe.save()
    .then(msg => {
      res.json(msg)
    }
  )
}

module.exports = addRecipe
