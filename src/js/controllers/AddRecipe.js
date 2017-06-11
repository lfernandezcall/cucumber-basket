function AddRecipe ($scope, $rootScope, DataService) {
  const ingredients = []
  $scope.addIngredient = function () {
    const {name, quantity} = $scope
    ingredients.push({name, quantity})
    $scope.ingredients = ingredients
  }

  $scope.addRecipe = function () {
    const {title, recipeImg, description, ingredients} = $scope
    DataService.addRecipe({title, recipeImg, description, ingredients})
      .then(console.log(ingredients))
    DataService.getAllRecipes()
      .then(recipes => $rootScope.recipes = recipes)
  }
}

module.exports = AddRecipe
