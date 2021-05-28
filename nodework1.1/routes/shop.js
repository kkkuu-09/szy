var express =require('express');
var router=express.Router();
var db = require('./db/db2');


router.get('/',function(req, res,next){

    db.query("select * from tab_course",(err,result)=>{
        console.log("错误"+err)
        res.render('shop',{ data: result });
    })
   
});



module.exports=router;