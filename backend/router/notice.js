const router = new require('express').Router()
const fs = require('fs')

const noticePath = './files/notice.txt'

router.get('/notice', (_, res) => {
    let content = fs.readFileSync(noticePath, 'utf-8')
    res.send({
        code: 200,
        content: content
    })
})

router.put('/notice/save', (req, res) => {
    if (!req.session.pass || req.session.pass == false) {
        res.send({
            code: 400,
            msg: '身份失效'
        })
        return
    }
    if (req.body.content) {
        fs.writeFileSync(noticePath, req.body.content)
        res.send({
            code: 200
        })
    } else {
        res.send({
            code: 420,
            msg: '缺少须知内容参数'
        })
    }
})

module.exports = router