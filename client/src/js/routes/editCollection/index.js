function configRoutes ($routeProvider) {
  $routeProvider
    .when('/editCollection', {
      templateUrl: '/templates/editCollection.html',
      controller: 'EditCollectionController'
    })
}

module.exports = configRoutes
