function DataSercive ($http) {
  function getAllRecipes () {
    return $http.get('/api/recipes')
      .then(response => response.data)
  }
  return { getAllRecipes }
}

module.exports = DataSercive
