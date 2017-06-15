function configRoutes ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '/templates/showCollection.html',
      controller: 'CollectionController'
    })
}

module.exports = configRoutes
