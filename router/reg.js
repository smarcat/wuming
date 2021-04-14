const express = require('express');
const pool = require('../mysql/pool');
const r = express.Router();

r.post('/reg', (req, res) => {
    var obj = req.body
    console.log(obj)

    pool.query('insert into user set ?', [obj], (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        res.send({
            code: 200,
            msg: '注册成功'
        })
    })
})

module.exports = r