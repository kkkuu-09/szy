var express =require('express');
var router=express.Router();
var db = require('./db/db2');


router.get('/',function(req, res,next){

    db.query("select * from tab_user",(err,result)=>{
        console.log("错误"+err)
        res.render('admin',{ data: result });
    })
   
});

router.get('/add',(req,res)=>{
    res.render('add');
});

router.post('/add',(req,res)=>{

    db.queryParam("insert into tab_user(name,grade,time)values(?,?,?)",[
                req.body.name,
                req.body.grade,
             ],(err,rows)=>{
                 console.log(err)
                res.redirect("/admin")
            })
        });

        router.post('/',(req,res)=>{
           
            db.queryParam("select * from tab_user where name=? or grade=?",[
                        req.body.search,
                        req.body.search,
                     ],(err,result)=>{
                         console.log("这里错误"+err)
                         res.render('admin',{ data: result});
                    })
                })
        
                router.get('/udt/:id',(req, res)=>{

                    db.queryParam("select * from tab_user where id =?",(err,result)=>{
                        console.log("错误"+err)
                        res.render('upt',{ data: result });
                    })
                   
                });

module.exports=router;