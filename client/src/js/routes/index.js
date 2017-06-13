const angular = require('angular')
const angularRoute = require('angular-route')
const angularTable = require('ng-table')

const configRouteCollection = require('./collection')
const CollectionController = require('./collection/CollectionController')

angular.module('adminCollectionRoutes', [ angularRoute, 'ngTable' ])
  .controller('CollectionController', CollectionController)
  .config(configRouteCollection)

module.exports = 'adminCollectionRoutes'
