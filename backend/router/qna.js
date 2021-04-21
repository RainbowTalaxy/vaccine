const router = new require('express').Router()
const qna_db = require('../sql/qna')

function dateToString(date) {
    let result = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
    return result
}

router.all('/qna', (_, res) => {
    res.send('hello')
})

router.get('/qna/list', (_, res) => {
    qna_db.findAll()
        .then(result => {
            res.send({
                code: 200,
                list: result
            })
        }, error => {
            console.log(error)
            res.send({
                code: 411,
                msg: '获取问答列表失败'
            })
        })
})

router.post('/qna/add', (req, res) => {
    if (!req.session.pass || req.session.pass == false) {
        res.send({
            code: 400,
            msg: '身份失效'
        })
        return
    }
    const { q_question, q_answer, q_date } = req.body
    if (q_question && q_answer && q_date) {
        qna_db.add({
            q_question: q_question,
            q_answer: q_answer,
            q_date: dateToString(new Date(q_date))
        }).then(_ => {
            res.send({
                code: 200
            })
        }, error => {
            console.log(error)
            res.send({
                code: 413,
                msg: '添加问答失败'
            })
        })
    } else {
        res.send({
            code: 412,
            msg: '缺少问答参数'
        })
    }
})

router.delete('/qna/remove', (req, res) => {
    if (!req.session.pass || req.session.pass == false) {
        res.send({
            code: 400,
            msg: '身份失效'
        })
        return
    }
    if (req.query.q_id) {
        qna_db.removeById(req.query.q_id)
            .then(_ => {
                res.send({
                    code: 200
                })
            }, error => {
                console.log(error)
                res.send({
                    code: 414,
                    msg: '删除问答失败'
                })
            })
    } else {
        res.send({
            code: 412,
            msg: '缺少问答参数'
        })
    }
})

module.exports = router