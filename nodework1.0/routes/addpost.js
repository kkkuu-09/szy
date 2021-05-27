// // var express = require('express');
// // var router = express.Router();
// // var User=require('./bean/user')
// // var mysql=require('mysql')
    
// // const db =mysql.createConnection({
// //         host:'localhost',
// //         user:'root',
// //         password:'1234',
// //         database:'lesson',
// //         port:3306
// //        });

// // db.connect((err)=>{
// //     if(err) throw err;
// //     console.log("连接成功");
// // })

// // //插入数据
// // app.get("addpost1",(req,res)=>{

// //     // let post ={name:"post one", password:"easth"};
// //     // let sql="insert into tab_admin set ?";
// //     let user = new User(req.body.name,req.body.password);
// //     var query="insert tab_admin(aname,password)values ('"+user.name+"','"+user.password+"')"
// //     db.query(query,(err,result)=>{
// //         if(err){
// //             console.log(err);
// //         }else{
// //             console.log(result);
// //             res.send("post1 addes...")
// //         }
// //     })
// // })
// const express = require('express');
// var router = express.Router();
// const app = express();
// const bodyParser = require('body-parser');
// const mysql = require('mysql');


// router.get('/addpost',function(req,res){
//     res.render('addpost');
// });
// //这里配置连接池以链接数据库
// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '1234',
//     // port: '3306',
//     database: 'nodemysql',
//     useConnectionPooling: true
// })



// connection.connect(function () {
//     console.log('连接成功')

// });

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({
//     extended: true
// }))
// //设置跨域访问
// app.all('*', function (req, res, next) {
//     //设置允许跨域的域名，*代表允许任意域名跨域
//     res.header("Access-Control-Allow-Origin", "*");
//     //允许的header类型
//     res.header('Access-Control-Allow-Headers', 'Content-type');
//     //跨域允许的请求方式
//     res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS,PATCH");
//     //可选，用来指定本次预检请求的有效期，单位为秒。在此期间，不用发出另一条预检请求。
//     res.header('Access-Control-Max-Age', 1728000);//预请求缓存20天
//     next();
// });



// //  查询
// app.get('/getdata', (req, res) => {
//     //查询名为posts的表
//         let sql = 'select * from posts';
//         connection.query(sql, (err, results) => {
//             if (err) return res.json({
//                 code: 100,
//                 data: '没有内容'
//             });
//             res.json({
//                 code: 200,
//                 data: results
//             });
    
//         })
//         // connection.end()
//     });
    
//     //插入数据
//     app.post('/insertdata', (req, res) => {
//         let params = [req.body.name, req.body.age, req.body.school, req.body.discribe] //  传来的参数
//         let addsql = `insert into posts(name,age,school,discribe) value (?,?,?,?)` //  插入语句，?代表插入的值，要插入到posts表内容
//         let test = new Promise((resolve, reject) => {
//             connection.query(addsql, params, (err, result) => {
//                 err ? reject(`插入失败`) : resolve(result)
//             })
//         })
//         test.then(result => {
//             connection.query('select last_insert_id()', (err, results) => {
//                 //  last_insert_id是获取表中最后一条数据
//                 res.json({
//                     code: 200,
//                     data: {
//                         // id: results[0]['last_insert_id()'],
//                         name: req.body.name,
//                         age: parseInt(req.body.age),
//                         school: req.body.name,
//                         discribe: req.body.discribe
//                     }
//                 });
//             })
//         }).catch(err => {
//             res.json({
//                 code: 100,
//                 data: `插入数据有误`
//             })
//         })
//     });
    
//     //  编辑
//     app.post('/updatedata', (req, res) => {
//         let [params, addsql] = [
//             [req.body.name, req.body.age, req.body.school, req.body.discribe],
//             `update posts set name = ? , age = ? , school = ? , discribe = ? where id = ${req.body.id}`
//         ]
//         let selectSql = `select id,name,age,school,discribe from posts where id=${req.body.id}`
//         let update = new Promise((resolve, reject) => {
//             connection.query(addsql, params, (err, result) => {
//                 err ? reject(`插入失败`) : resolve(result)
//             })
//         })
//         update.then(result => {
//             connection.query(selectSql, req.body.id, (err, results) => {
//                 if (err) {
//                     return res.json({
//                         code: 200,
//                         data: []
//                     });
//                 } else {
//                     res.json({
//                         code: 200,
//                         data: results
//                     });
//                 }
//             })
//         }).catch(err => {
//             res.json({
//                 code: 100,
//                 data: '编辑失败'
//             });
//         })
//     })
    
//     //  删除
//     app.post('/deletedata', (req, res) => {
//         let [params, addsql] = [
//             [req.body.id],
//             'delete posts from posts where id = ? '
//         ]
//         let test = new Promise((resolve, reject) => {
//             connection.query(addsql, params, function (err, result) {
//                 err ? reject(`删除失败`) : resolve(result)
//             })
//         })
//         test.then(result => {
//             res.json({
//                 code: 200,
//                 data: `删除成功`
//             })
//         }).catch(err => {
//             res.json({
//                 code: 100,
//                 data: '删除失败'
//             })
//         })
//     });
//     // var server = app.listen(3000, function () {
//     //     const hostname = 'localhost';
//     //     const port = 3000;
//     //     console.log(`Server running at http://${hostname}:${port}/`);
//     // })
// module.exports = router;





// //     配置服务端口 
// // var server = app.listen(3000, function () {
// //     const hostname = 'localhost';
// //     const port = 3000;
// //     console.log(`Server running at http://${hostname}:${port}/`);
// // })



// var db = require('./db/db');


// router.get('/backstage',function(req,res){
//     db.sql("select * from tab_user",(err,rows)=>{
//         res.render('index',{data:rows});
//     });
// });

// router.get('/add',(req,res)=>{
//     if(req.query.id !=undefined){
//        db.sqlParam("select * from tab_user where id =?",[req.query.id],(err,ros)=>{
//            res.render('add',{row:row[0]});
//        }) 
//     }else{
//         res.render('add');
//     }

// });

// router.post('/add',(req,res)=>{
//     db.sqlParam("insert into tab_user(name)values(?,?,?,?)",[
//         req.body.name,
//         req.body.name,
//         req.body.name,
        
//     ],(err,rows)=>{
//         console.log(err)
//         res.redirect("/add")
//     })
// })