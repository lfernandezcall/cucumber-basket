function GetRecipes($scope, ApiService) {
  ApiService.getAllRecipes()
    .then(recipes => $scope.recipes = recipes)
  $scope.name = "Luis Alberto"
}

module.exports = GetRecipes
