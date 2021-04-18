const router = new require('express').Router()
const news_db = require('../sql/site')

router.all('/site', (_, res) => {
    res.send('hello')
})

router.get('/site/list', (_, res) => {
    news_db.findAll()
        .then(result => {
            res.send({
                code: 200,
                list: result
            })
        }, error => {
            console.log(error)
            res.send({
                code: 431,
                msg: '获取接种点失败'
            })
        })
})

router.post('/site/add', (req, res) => {
    if (!req.session.pass || req.session.pass == false) {
        res.send({
            code: 400,
            msg: '身份失效'
        })
        return
    }
    const { s_name, s_address, s_longitude, s_latitude } = req.body
    if (s_name && s_address && s_longitude && s_latitude) {
        news_db.add({
            s_name: s_name,
            s_address: s_address,
            s_longitude: s_longitude,
            s_latitude: s_latitude
        }).then(_ => {
            res.send({
                code: 200
            })
        }, error => {
            console.log(error)
            res.send({
                code: 433,
                msg: '添加接种点失败'
            })
        })
    } else {
        res.send({
            code: 432,
            msg: '缺少接种点参数'
        })
    }
})

router.delete('/site/remove', (req, res) => {
    if (!req.session.pass || req.session.pass == false) {
        res.send({
            code: 400,
            msg: '身份失效'
        })
        return
    }
    if (req.query.s_id) {
        news_db.removeById(req.query.s_id)
            .then(_ => {
                res.send({
                    code: 200
                })
            }, error => {
                console.log(error)
                res.send({
                    code: 434,
                    msg: '删除资讯失败'
                })
            })
    } else {
        res.send({
            code: 432,
            msg: '缺少资讯参数'
        })
    }
})

module.exports = router
