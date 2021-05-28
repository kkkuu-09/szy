const mysql = require('mysql');

var mysqlConnect = {};

var pool = mysql.createPool({
    connectLimit:10,
    host: "localhost",
    port: "3306",
    user: "root",
    password: "1234",
    database: "lesson"
});

mysqlConnect.sql=function (query,callback) {
    if(!query){
        callback();
        return;
    }
    pool.query(query,function (err,rows,fields) {
       if(err){
           callback(err,null);
           return;
       }
       console.log(err);
       console.log(rows);
       callback(null,rows);
    });
};

mysqlConnect.sqlParam=function (query,param,callback) {
    if(!query){
        callback();
        return;
    }
    pool.query(query,param,function (err,rows,fields) {
       if(err){
           callback(err,null);
           return;
       }
       callback(null,rows);
    });
};

module.exports = mysqlConnect;