const router = new require('express').Router()

router.all('/login', (req, res) => {
    console.log(req.body)
    if (req.body.u_name == 'root' && req.body.u_pwd == 'admin') {
        req.session.u_name = 'root'
        req.session.u_pwd = 'admin'
        res.send({
            code: 200
        })
    } else {
        res.send({
            code: 400,
            message: "用户名或者密码错误"
        })
    }
})

module.exports = router