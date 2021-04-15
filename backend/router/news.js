const router = new require('express').Router()
const news_db = require('../sql/news')

// router.all('/news', (_, res) => {
//     res.send('hello')
// })

router.get('/news/list', (_, res) => {
    news_db.findAll()
        .then(result => {
            res.send({
                code: 200,
                list: result
            })
        }, error => {
            console.log(error)
            res.send({
                code: 401,
                msg: '获取资讯列表失败'
            })
        })
})

router.post('/news/add', (req, res) => {
    if (!req.session.pass || req.session.pass == false) {
        res.send({
            code: 400,
            msg: '身份失效'
        })
        return
    }
    const { n_title, n_short, n_date, n_link } = req.body
    if (n_title && n_short && n_date && n_link) {
        news_db.add({
            n_title: n_title,
            n_short: n_short,
            n_date: new Date(n_date).toLocaleDateString(),
            n_link: n_link
        }).then(_ => {
            res.send({
                code: 200
            })
        }, error => {
            console.log(error)
            res.send({
                code: 403,
                msg: '添加资讯失败'
            })
        })
    } else {
        res.send({
            code: 402,
            msg: '缺少资讯参数'
        })
    }
})

router.delete('/news/remove', (req, res) => {
    if (!req.session.pass || req.session.pass == false) {
        res.send({
            code: 400,
            msg: '身份失效'
        })
        return
    }
    if (req.query.n_id) {
        news_db.removeById(req.query.n_id)
            .then(_ => {
                res.send({
                    code: 200
                })
            }, error => {
                console.log(error)
                res.send({
                    code: 404,
                    msg: '删除资讯失败'
                })
            })
    } else {
        res.send({
            code: 402,
            msg: '缺少资讯参数'
        })
    }
})

module.exports = router
