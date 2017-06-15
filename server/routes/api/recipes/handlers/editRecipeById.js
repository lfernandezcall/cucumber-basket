const Task = require('../../../../models/Recipe')

function editRecipeById (req, res) {
  const { id } = req.params
  const {recipeImg, title, description, ingredients} = req.body

  const updateData = {}

  if (recipeImg) updateData.recipeImg = recipeImg
  if (title) updateData.title = title
  if (description) updateData.description = description
  if (ingredients) updateData.ingredients = ingredients

  Task.findByIdAndUpdate(id, updateData)
    .then(
      res.status(200).send(`Item w/ ID: ${id} was updated succesfully`)
    )
}

module.exports = editRecipeById
