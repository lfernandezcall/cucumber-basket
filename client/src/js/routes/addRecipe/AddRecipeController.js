function AddRecipeController ($scope, $rootScope, $location, DataService) {
  const ingredients = []

  $scope.addIngredient = function () {
    const {name, quantity} = $scope
    ingredients.push({name, quantity})
    $scope.ingredients = ingredients
  }

  $scope.addRecipe = function () {
    const {title, recipeImg, description, ingredients} = $scope
    console.log({title, recipeImg, description, ingredients})
    DataService.addRecipe({title, recipeImg, description, ingredients})
      .then( () => $location.path('/') )
    // DataService.getAllRecipes()
    //   .then(recipes => $rootScope.recipes = recipes)
  }
}

module.exports = AddRecipeController
