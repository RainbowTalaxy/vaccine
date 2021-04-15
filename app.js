const express = require('express')

var app = express()
var port = 3000

app.all("*", function (req, res, next) {
    res.header("Access-Control-Allow-Origin", req.get('origin'))
    next()
})

app.use(express.static('static'))

app.get('/hello', (req, res) => {
    res.send('hello world')
})

app.listen(port, () => {
    console.log('listening on port ' + port + '...')
})
