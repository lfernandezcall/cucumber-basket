function getAllRecipes (req, res) {
  console.log('Response received, showing all recipes...')
  res.render('recipes')
}

module.exports = getAllRecipes
