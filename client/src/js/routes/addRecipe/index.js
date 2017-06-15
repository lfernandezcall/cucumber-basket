function configRoutes ($routeProvider) {
  $routeProvider
    .when('/addRecipe', {
      templateUrl: '/templates/addRecipe.html',
      controller: 'AddRecipeController'
    })
}

module.exports = configRoutes
