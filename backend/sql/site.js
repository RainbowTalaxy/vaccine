const { select, selectBy, insert, removeBy } = require('./sql')

const tableName = "site"

const findAll = select(tableName)
const findById = selectBy(tableName, 's_id')
const add = insert(tableName)
const removeById = removeBy(tableName, 's_id')

module.exports = {
    findAll, findById, add, removeById
}


// add({
//     s_name: '假的疫苗点',
//     s_address: '南京市江宁区弘景大道99号',
//     s_longitude: 118.899354,
//     s_latitude: 31.903982
// }).then(_ => {})

// findAll().then(i => console.log(i))