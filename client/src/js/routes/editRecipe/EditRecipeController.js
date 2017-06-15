function EditRecipeController ($scope, $rootScope, $routeParams, DataService) {
  const ID = $routeParams.id
  DataService.getSingleRecipe(ID)
    .then(recipe => {
      const {recipeImg, title, description } = recipe
      $scope.title = title
      $scope.description = description
      $scope.recipeImg = recipe.recipeImg
      $scope.ingredients = recipe.ingredients
    })

  $scope.EditRecipe = function () {
    const {recipeImg, title, description, ingredients} = $scope
    const data = {recipeImg, title, description, ingredients}
    DataService.editRecipeById(ID, data)
      .then(() => console.log('data updated!!'))
  }
}

module.exports = EditRecipeController
