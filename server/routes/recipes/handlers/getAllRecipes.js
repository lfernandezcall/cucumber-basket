const Recipe = require('../../../models/Recipe')

function getAll (req, res) {
  Recipe.find()
    .then(data => {
      console.log('Showing all recipes')
      res.render('recipes', {data})
    })
}

module.exports = getAll
