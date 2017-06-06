const Recipe = require('../../../models/Recipe')

function addRecipe(req, res) {
  const { recipeImg, title, description } = req.body

  const newRecipe = new Recipe({ recipeImg, title, description })

  newRecipe.save()
    .then( msg => {
        console.log('Succesfully added new recipe')
        res.json(msg)
    }
  )
}

module.exports = addRecipe