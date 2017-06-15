var fs = require('fs')
var htmlHome = fs.readFileSync(__dirname + '/template.html', 'utf8')

function configRoutes ($routeProvider) {
  $routeProvider
    .when('/', {
      template: htmlHome,
      controller: 'CollectionController'
    })
}

module.exports = configRoutes
