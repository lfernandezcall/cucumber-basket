function CollectionController ($scope, $rootScope, DataService) {
  DataService.getAllRecipes()
    .then(recipes => $rootScope.recipes = recipes)

  $scope.removeRecipeById = function (id) {
    DataService.removeRecipeById(id)
      .then(console.log('recipe was removed succesfully'))
    DataService.getAllRecipes()
      .then(recipes => $rootScope.recipes = recipes)
  }
}

module.exports = CollectionController
