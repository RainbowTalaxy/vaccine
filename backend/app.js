const express = require('express')
const session = require('express-session')
const { syncIndex } = require('./util/pre')

syncIndex()

var app = express()
var port = 3000

app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', req.get('origin'))
    next()
})

app.use(express.static('statics'))

app.use(express.json())
app.use(express.urlencoded({ 
    extended: false 
}))

app.use(session({
    secret: 'vaccine',
    cookie: {
        maxAge: 120000
    }
}))

app.all('/hello', (_, res) => {
    res.send('hello')
})

app.use(require('./router/login'))
app.use(require('./router/news'))
app.use(require('./router/qna'))

app.listen(port, () => {
    console.log('listening on port ' + port + '...')
})
