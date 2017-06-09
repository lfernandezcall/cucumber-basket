function AddRecipe ($scope, DataService, $rootScope) {

  $scope.addRecipe = function () {
    const {title, recipeImg, description, ingredient, quantity} = $scope
    const ingredients = {ingredient, quantity}
    DataService.addRecipe({title, recipeImg, description, ingredients})
      .then(console.log(ingredients))
    DataService.getAllRecipes()
      .then(recipes => $rootScope.recipes = recipes)
  }
}

module.exports = AddRecipe
