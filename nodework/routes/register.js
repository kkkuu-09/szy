var express = require('express');
var router = express.Router();
var User=require('./bean/user')
var mysql=require('mysql')
    
var connection =mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'1234',
        database:'lesson',
        port:3306
       });


router.get('/',(req, res)=> {
  res.render('register');
});

router.post('/',(req,res) =>{
       // 获取前端传递的参数,放入对象
    let user = new User(req.body.name,req.body.password);
    var query="insert tab_admin(aname,password)values ('"+user.name+"','"+user.password+"')"
    connection.query(query,(err,results,fields)=>{
        // res.render('index');
        if(err){
            console.log(err);
            res.json({"status":-1});
            return;
        }
        res.json({"status":1});
       })

    });


module.exports = router;

