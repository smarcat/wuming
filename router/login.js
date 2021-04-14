 const express = require('express');
const pool = require('../mysql/pool.js');
 const mysql =require('../mysql/pool.js');
 const r =express.Router();

 r.post('/login',(req,res)=>{
     var obj =req.body;
     console.log(obj);
     pool.query('select * from user where uname=? and upwd=?',[obj.uname,obj.upwd],(err,resule)=>{
         if(err){
             console.log(err);
             return;
         }
         if(resule.length===0){
             res.send({
                 code:200,
                 msg:'登录失败'
             })
         }else {
             res.send({
                 code:'200',
                 msg:'登录成功'
             })
         }
     })
 })

module.exports=r