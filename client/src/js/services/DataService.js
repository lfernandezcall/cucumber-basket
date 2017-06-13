function DataService ($http) {
  function getAllRecipes () {
    return $http.get('/api/recipes')
      .then(response => response.data)
  }
  function addRecipe (data) {
    return $http.post('/api/recipes', data)
  }
  function removeRecipeById (id) {
    console.log(id)
    return $http.delete('/api/recipes/' + id)
  }
  return {
    getAllRecipes: getAllRecipes,
    addRecipe: addRecipe,
    removeRecipeById: removeRecipeById
  }
}

module.exports = DataService
