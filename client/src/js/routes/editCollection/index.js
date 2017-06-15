var fs = require('fs');
var htmlEditCollection = fs.readFileSync(__dirname + '/template.html', 'utf8');

function configRoutes ($routeProvider) {
  $routeProvider
    .when('/editCollection', {
      template: htmlEditCollection,
      controller: 'EditCollectionController'
    })
}

module.exports = configRoutes
