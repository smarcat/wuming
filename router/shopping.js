const express = require('express');
const pool = require('../mysql/pool.js');
 const mysql =require('../mysql/pool.js');
 const r =express.Router();
 r.get('/shop',(req,res)=>{
     pool.query('select * from gshop where uid>6 and uid<22',(err,result)=>{
         if(err) {
             console.log(err)
             return;
         }
         res.send(result)
     })
 })

//  花儿店铺商品展示
r.get('/shops',(req,res)=>{
    pool.query('select * from img_goods',(err,result)=>{
        if(err){
            console.log(err);
            return;
        }
        res.send(result);
    })
})





 module.exports=r