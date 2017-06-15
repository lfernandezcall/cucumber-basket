function CollectionController ($scope, $rootScope, $location, DataService) {
  DataService.getAllRecipes()
    .then(recipes => $location.path('/editCollection'))
}

module.exports = CollectionController
