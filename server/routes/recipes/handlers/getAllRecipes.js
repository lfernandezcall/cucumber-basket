const Recipe = require ('../../../models/Recipe')

function getAll (req, res) {
  console.log('requesting all recipes...')
  Recipe.find()
    .then(data => {
      console.log('Showing all recipes')
      res.render('recipes', {data})
    })
}


module.exports =  getAll