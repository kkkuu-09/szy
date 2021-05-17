var express =require('express');
var router=express.Router();
const { clearCache } = require('ejs');
var mysql =require('mysql');
let User =require('./bean/user');

router.get('/',function(req,res){
    res.render('index');
});

router.get('/about',function(req,res){
    res.render('about');
});

router.get('/services',function(req,res){
    res.render('services');
});

router.get('/contact',function(req,res){
    res.render('contact');
});

router.get('/backstage',function(req,res){
    res.render('backstage');
});

router.get('/password',function(req,res){
    res.render('password');
});

router.get('/shop',function(req,res){
    res.render('shop');
});

router.get('/shopsingle',function(req,res){
    res.render('shopsingle');
});

router.post('/',(req,res) =>{
    let name =req.body.name;
    let password = req.body.password;
    var connection =mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'1234',
        database:'lesson',
        port:3306
       });
       connection.connect();
    var query ="select aname, password from tab_admin where aname = '"+name+"'and password = '"+password+"'";
connection.query(query,(err,results,fields)=>{
    // res.render('index');
    if(err){
        console.log(err);
        res.json({"status":-1});
        return;
    }
    res.json({"status":1});
   })
    connection.end();
});




module.exports=router;