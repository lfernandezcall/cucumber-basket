const Recipe = require('../../../models/Recipe')

function addRecipe(req, res) {
  const { photo, title, directions } = req.body

  const newRecipe = new Recipe({ photo, title, directions })

  newRecipe.save()
    .then( msg => {
        console.log('Succesfully added new recipe')
        res.json(msg)
    }
  )
}

module.exports = addRecipe