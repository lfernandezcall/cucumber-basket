const angular = require('angular')
const DataService = require('./services/DataService')
const GetRecipesController = require('./controllers/GetRecipes')
const AddRecipeController = require('./controllers/AddRecipe')

angular.module('adminPanel', [])
  .factory('DataService', DataService)
  .controller('GetRecipesController', GetRecipesController)
  .controller('AddRecipeController', AddRecipeController)
