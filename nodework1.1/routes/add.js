var express =require('express');
var router=express.Router();
var db = require('./db/db');


router.get('/',(req, res)=> {
    console.log("get add===")
    res.render('tianjia');
});

router.post('/',(req,res)=>{
    console.log("dskmd")
    db.sqlParam("insert into tab_user(name,grade) values(?,?)",[
        req.body.name,
        req.body.grade,
       
     ],(err,rows)=>{
         console.log("错误" + err);
        res.redirect("/backstage")
    })
})

module.exports=router;