var fs = require('fs');
var htmlEditRecipe = fs.readFileSync(__dirname + '/template.html', 'utf8');


function configRoutes ($routeProvider) {
  $routeProvider
    .when('/editRecipe/:id', {
      template: htmlEditRecipe,
      controller: 'EditRecipeController'
    })
}

module.exports = configRoutes
