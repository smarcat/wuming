const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const pool = require('./mysql/pool.js');
const userRouter = require('./router/reg.js');
const userLogin = require('./router/login.js');
const shop =require('./router/shopping.js');
app.all(function(req,res){
    res.header('Access-Control-Allow-Origin:*');
})
app.listen(8080);
// app.use((req, res, next) => {
//     res.setHeader('content-type:text/html ; charset=utf8')
// })
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(express.static('./public'));
app.use(express.static('./public/view'));
app.use('/user_reg', userRouter);
app.use('/user_login', userLogin);
app.use('/index_shop',shop);
app.use((err, req, res, next) => {
    //不写url，要拦截所有的错误
    console.log(err)
    return;
    res.send({
        code: 500,
        msg: '服务器错误'
    })
})