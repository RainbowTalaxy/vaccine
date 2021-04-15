var mysql = require('mysql')

var config = {
    host: 'localhost',
    user: 'root',
    password: 'huangdaju',
    database: 'vaccine'
}

function query(callback) {
    var connection = mysql.createConnection(config)
    connection.connect()
    callback(connection)
    connection.end()
}

function select(tableName) {
    return () => new Promise((resolve, reject) => {
        query(connection => {
            connection.query('select * from ' + tableName, (error, results) => {
                error && reject(error)
                resolve(results)
            })
        })
    })
}

function selectBy(tableName, field) {
    return (value) => new Promise((resolve, reject) => {
        query(connection => {
            connection.query('select * from ' + tableName + ' where ' + field + ' = ?', value, (error, results) => {
                error && reject(error)
                resolve(results)
            })
        })
    })
}

function insert(tableName) {
    return (object) => new Promise((resolve, reject) => {
        query(connection => {
            connection.query('insert into ' + tableName + ' set ?', object, (error, results) => {
                error && reject(error)
                resolve(results)
            })
        })
    })
}

function updateBy(tableName, field) {
    return (object, value) => new Promise((resolve, reject) => {
        query(connection => {
            connection.query('update ' + tableName + ' set ? where ' + field + ' = ?', [object, value], (error, results) => {
                error && reject(error)
                resolve(results)
            })
        })
    })
}

function removeBy(tableName, field) {
    return (value) => new Promise((resolve, reject) => {
        query(connection => {
            connection.query('delete from ' + tableName + ' where ' + field + ' = ?', value, function (error, results) {
                error && reject(error)
                resolve(results)
            })
        })
    })
}

function removeWithTwoKeys(tableName, field_1, field_2) {
    return (value_1, value_2) => new Promise((resolve, reject) => {
        query(connection => {
            connection.query(
                'delete from ' + tableName + ' where ' + field_1 + ' = ? and ' + field_2 + ' = ?',
                [value_1, value_2],
                (error, results) => {
                    error && reject(error)
                    resolve(results)
                }
            )
        })
    })
}

module.exports = {
    select, insert, removeBy, updateBy, removeWithTwoKeys, selectBy
}