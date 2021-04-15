const router = new require('express').Router()

router.post('/login', (req, res) => {
    if (req.body.u_name == 'root' && req.body.u_pwd == 'admin') {
        req.session.pass = true
        res.send({
            code: 200
        })
    } else {
        res.send({
            code: 400,
            msg: "用户名或密码错误"
        })
    }
})

module.exports = router