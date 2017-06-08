function AddRecipe ($scope, DataService, $rootScope) {

  $scope.addRecipe = function () {
    const {title, recipeImg, description} = $scope
    DataService.addRecipe({title, recipeImg, description})
      .then(console.log('Added recipe....'))
    DataService.getAllRecipes()
      .then(recipes => $rootScope.recipes = recipes)
  }
}

module.exports = AddRecipe
