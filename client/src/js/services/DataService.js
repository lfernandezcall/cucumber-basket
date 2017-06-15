function DataService ($http) {

  function getAllRecipes () {
    return $http.get('/api/recipes')
      .then(response => response.data)
  }

  function getSingleRecipe (id) {
    return $http.get('/api/recipe/' + id)
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

  return { getAllRecipes, addRecipe, removeRecipeById, editRecipeById, getSingleRecipe }
}

module.exports = DataService
