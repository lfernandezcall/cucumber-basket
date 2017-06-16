var fs = require('fs')
var htmlNavbar = fs.readFileSync(__dirname + '/templates/navbar.html', 'utf8')
var htmlFooter = fs.readFileSync(__dirname + '/templates/footer.html', 'utf8')

function runAtBegin ($templateCache) {
  $templateCache.put('navbar.html', htmlNavbar)
  $templateCache.put('footer.html', htmlFooter)
}

module.exports = runAtBegin
