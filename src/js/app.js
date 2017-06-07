const angular = require('angular')
const GetRecipesController = require('./controllers/GetRecipes')
const ApiService = require('./services/ApiService')

angular.module('adminPanel', [])
  .factory('ApiService', ApiService)
  .controller('GetRecipesController', GetRecipesController)
