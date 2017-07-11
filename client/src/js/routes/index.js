const angular = require('angular')
const angularRoute = require('angular-route')
const ngFileUpload = require('ng-file-upload')

const configRouteShowCollection = require('./showCollection')
const CollectionController = require('./showCollection/CollectionController')

const configRouteAddrecipe = require('./addRecipe')
const AddRecipeController = require('./addRecipe/AddRecipeController')

const configRouteEditCollection = require('./editCollection')
const EditCollectionController = require('./editCollection/EditCollectionController')

const configRouteEditRecipe = require('./editRecipe')
const EditRecipeController = require('./editRecipe/EditRecipeController')

angular.module('adminCollectionRoutes', [ angularRoute, ngFileUpload ])

  .controller('CollectionController', CollectionController)
  .config(configRouteShowCollection)

  .controller('AddRecipeController', AddRecipeController)
  .config(configRouteAddrecipe)

  .controller('EditCollectionController', EditCollectionController)
  .config(configRouteEditCollection)

  .controller('EditRecipeController', EditRecipeController)
  .config(configRouteEditRecipe)

module.exports = 'adminCollectionRoutes'
