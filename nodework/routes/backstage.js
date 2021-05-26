var express =require('express');
const { route } = require('.');
var router=express.Router();
var db = require('./db/db');



router.get('/',function(req,res,next){
    db.sql("select * from tab_user",(err,rows)=>{
        res.render('backstage',{data:rows});
    });
});


router.get('/add',(req, res)=> {
    console.log("get add===")
    res.render('add');
    
});

// router.all('/',(req,res)=>{
//     db.sqlParam("insert into tab_user(name,grade,time)values(?,?,?)",[
//         req.body.name,
//         req.body.grade,
//         req.body.time
//      ],(err,rows)=>{
//          console.log(err)
//         res.redirect("/backstage")
//     })
// })
// router.post('/add', function (req, res) {
//     var name = req.body.name;
//     var grade = req.body.grade;
//     var time=req.body.time
//     pool.getConnection(function (err, connection) {
//         connection.query(userSQL.inserttab_user, [name,grade,time], function (err, rows) {
//             if (err) {
//                 res.end('新增失败:' + err);
//             } else {
//                 res.redirect('/add');
//             }
//             connection.release();

//         });
//     });
// });

// router.get('/add',(req,res)=>{
//     if(req.query.id !=undefined){
//        db.sqlParam("select * from tab_user where id =?",[req.query.id],(err,row)=>{
//            res.render('add',{row:row[0]});
//        }) 
//     }else{
//         res.render('add');
//     }

// });



// router.post('/add',(req,res)=>{
//         let id=req.body.id
//         let name=req.body.name
//         let grade=req.body.grade
//         let time=req.body.time
//         
//         db="insert into tab_user(name,grade,time)values('"+id+"','"+name+"','"+grade+"','"+time+"')"
//         db.sql(db,(err,rows)=>{
//             if (err) {
//                  console.log(err);
//             } else {
//                 res.redirect('/backstage/add');
//             }
//             
//         })
//     })


    /*删*/


   
    router.get('/del/:id', function (req, res) {
        var id = req.params.id;
            db.sqlParam("delete from tab_user where id=" + id, function (err, rows) {
                 if (err) {
                     res.end('删除失败:' + err);
                     console.log(err)
                 } else {
                     res.redirect('/backstage');
                 }
           
         });
     
     });
     


// 查询
router.post('/search',function (req, res) {
    var name = req.body.name;
    var grade=req.body.grade;
    
    var sql = "select * from tab_user";
    if (name) {
        sql += " and name='" + name + "' ";
    }
    if (grade) {
        sql += " and grade=" + grade + " ";
    }
    sql = sql.replace("and","where");
    
    db.sqlParam(sql, function (err, rows) {
             if (err) {
                 res.end("查询失败：", err)
             } else {
                 res.render("backstage", {title: 'Express', datas: rows, name: name, grade: grade});
             }
            
         });
    
 });

 // 修改功能模块
 var arr=new Array();
router.post('/update1', function (req, res) {
    var name = req.body.name;
    db.sqlParam("select * from tab_user where name='"+name+"'", function (err, rows) {
            if (err) {
                res.end('修改页面跳转失败:' + err);
                console.log(err)
            } else {
                arr=rows;
                console.log(arr);
               res.json({"data":1});
            }
        });
});

router.get("/upl1",(req,res) =>{
    console.log(arr)
    res.json({"data":arr});
})

router.post('/update',(req,res)=>{
    console.log("dskmd")
    let name =req.body.name;
    let grade =req.body.grade;
    let id =req.body.id;
    db.sqlParam("update tab_user set name='" + name + "',grade='" + grade + "' where id='"+id+"' ",(err,rows)=>{
         console.log("错误" + err);
        res.json({"data":1});
    })
})

// router.post('/update', function (req, res) {
//    var id = req.body.id;
//    var name = req.body.name;
//    var grade = req.body.grade;
//    var time = req.body.time;
  
    
//         db.sqlParam("update tab_user set name='" + name + "',grade='" + grade + "',time='" + time + "' where id=" + id, function (err, rows) {
//             if (err) {
//                 res.end('修改失败:' + err);
//             } else {
//                 res.redirect('/backstage');
//             }
           
//         });
    
// });





module.exports=router;