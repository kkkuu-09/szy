var express =require('express');
var router=express.Router();


router.get('/',function(req,res){
    res.render('update');
});

// router.get('/',function(req,res){
//     res.render('update');
// });

module.exports=router;