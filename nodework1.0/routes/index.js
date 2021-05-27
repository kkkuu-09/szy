var express =require('express');
var router=express.Router();
const { clearCache } = require('ejs');
var mysql =require('mysql');
let User =require('./bean/user');
var db = require('./db/db');

router.get('/',function(req,res){
    res.render('index');
});

router.get('/addpage',function(req,res){
    res.render('addpage');
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
    var query ="select name, password from tab_admin where name = '"+name+"'and password = '"+password+"'";
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


// const jwt = require('../token.js');
// exports.login = (req, res) => {
// 	let {
// 		name,
// 		password
// 	} = req.body;
// 	// 查询语句
// 	let sql = 'select * from tab_admin where name = ?'
// 	db.base(sql, name, (result) => {
// 		if (!result.length) {
// 			return res.json({
// 				status: -1,
// 				msg: '登录失败'
// 			})
// 		} else {
// 			if (result[0].password == password) {
// 				let token = jwt.creatToken({
// 					login: true,
// 					name: name
// 				});
// 				return res.json({
// 					status: 1,
// 					msg: '登录成功',
// 					token: token
// 				})
// 			}
// 			return res.json({
// 				status: -2,
// 				msg: '密码错误'
// 			})
// 		}
// 	})
// }
// exports.register = (req, res) => {
// 	let {
// 		username,
// 		password,
// 		token
// 	} = req.body;
// 	console.log(req.body);
// }


module.exports=router;