const showdown = require('showdown')
const fs = require('fs')

showdown.setFlavor('github')

function syncIndex() {
    var readme = fs.readFileSync('README.md', 'utf-8')
    var convertor = new showdown.Converter()

    var html = 
    '<html>\n' +
    '<head>\n' +
    '<meta name="viewport" content="width=device-width, initial-scale=1">' +
    '<link rel="stylesheet" type="text/css" href="index.css" />\n' +
    '<link href="https://unpkg.com/@primer/css@^16.0.0/dist/primer.css" rel="stylesheet" />\n' +
    '</head>\n' +
    '<body>\n' +
    '<div class="markdown-body">' +
    convertor.makeHtml(readme) + '\n' +
    '</div>' +
    '</body>\n' +
    '</html>\n'

    fs.writeFileSync('./statics/index.html', html)
}

module.exports = { syncIndex }
