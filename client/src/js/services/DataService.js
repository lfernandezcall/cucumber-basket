function DataService ($http) {
  function getAllRecipes () {
    return $http.get('/api/recipes')
      .then(response => response.data)
  }
  function addRecipe (data) {
    return $http.post('/api/recipes', data)
  }
  function removeRecipeById (id) {
    return $http.delete('/api/recipes/' + id)
  }
  function editRecipeById (id, data) {
    return $http.put('/api/recipes/' + id, data)
  }
  return {
    getAllRecipes: getAllRecipes,
    addRecipe: addRecipe,
    removeRecipeById: removeRecipeById,
    editRecipeById: editRecipeById
  }
}

module.exports = DataService
