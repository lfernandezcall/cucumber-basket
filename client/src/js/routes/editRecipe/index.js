function configRoutes ($routeProvider) {
  $routeProvider
    .when('/editRecipe', {
      templateUrl: '/templates/editRecipe.html',
      controller: 'EditRecipeController'
    })
}

module.exports = configRoutes
