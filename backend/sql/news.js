const { select, selectBy, insert, removeBy } = require('./sql')

const tableName = "news"

const findAll = select(tableName)
const findById = selectBy(tableName, 'n_id')
const add = insert(tableName)
const removeById = removeBy(tableName, 'n_id')

module.exports = {
    findAll, findById, add, removeById
}

// findAll().then(i => console.log(i))

// add({
//     n_title: '《新冠疫苗指南书》即将发布',
//     n_short: '该项目将在近期发布，尽请期待！',
//     n_date: new Date().toLocaleDateString(),
//     n_link: 'https://www.talaxy.cn'
// }).then()

// findAll().then(i => console.log(i))

// removeById(1).then()

// findAll().then(i => console.log(i))
