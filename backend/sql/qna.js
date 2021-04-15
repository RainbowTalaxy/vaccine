const { select, selectBy, insert, removeBy } = require('./sql')

const tableName = "qna"

const findAll = select(tableName)
const findById = selectBy(tableName, 'q_id')
const add = insert(tableName)
const removeById = removeBy(tableName, 'q_id')

module.exports = {
    findAll, findById, add, removeById
}
