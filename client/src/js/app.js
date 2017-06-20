const angular = require('angular')

const runAtBegin = require('./run')

const routesApp = require('./routes')
const DataService = require('./services/DataService')

angular.module('adminCollection', [ routesApp ])
  .factory('DataService', DataService)
  .run(runAtBegin)
