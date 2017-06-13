function configRoutes ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '/templates/showRecipes.html',
      controller: 'CollectionController'
    })
}

module.exports = configRoutes
