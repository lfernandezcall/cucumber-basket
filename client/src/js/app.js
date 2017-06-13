const angular = require('angular')

const ngAnimate = require('angular-animate')
const toastr = require('angular-toastr')

const routesApp = require('./routes')
const DataService = require('./services/DataService')

angular.module('adminCollection', [ routesApp, ngAnimate, toastr ])
  .factory('DataService', DataService)