const Recipe = require ('../../../models/Recipe')

function getAll (req, res) {
  const {$id} = req.body
  console.log('requesting all recipes...')
  Recipe.find()
    .then(data => {
      console.log('Showing all recipes')
      console.log(data)
      res.render('recipes', {data, $id})
    })
}


module.exports =  getAll