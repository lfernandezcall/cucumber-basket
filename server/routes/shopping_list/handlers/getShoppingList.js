function getShoppingList (req, res) {
  console.log('Response received, showing all recipes...')
  res.render('shopping_list')
}

module.exports = getShoppingList
