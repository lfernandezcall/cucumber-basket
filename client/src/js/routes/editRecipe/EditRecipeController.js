function EditRecipeController ($scope, $rootScope, $location, $routeParams, DataService) {
  const ID = $routeParams.id
  DataService.getSingleRecipe(ID)
    .then(recipe => {
      const {recipeImg, title, description } = recipe
      $scope.title = title
      $scope.description = description
      $scope.recipeImg = recipeImg
      $scope.ingredients = ingredients
    })

  $scope.EditRecipe = function () {
    const {recipeImg, title, description, ingredients} = $scope
    const data = {recipeImg, title, description, ingredients}
    DataService.editRecipeById(ID, data)
      .then(() => $location.path('/editCollection'))
  }
}

module.exports = EditRecipeController
