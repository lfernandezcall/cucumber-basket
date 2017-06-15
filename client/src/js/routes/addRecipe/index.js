var fs = require('fs');
var htmlAddRecipe = fs.readFileSync(__dirname + '/template.html', 'utf8');

function configRoutes ($routeProvider) {
  $routeProvider
    .when('/addRecipe', {
      template: htmlAddRecipe,
      controller: 'AddRecipeController'
    })
}

module.exports = configRoutes
