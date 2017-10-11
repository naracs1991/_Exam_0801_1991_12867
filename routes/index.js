var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

  router.get('/index',
  function(req,res,next){
      var NameAndInfo = Object.assign('Nelson Rivera','0801_1991_12867','naracs1991@gmail.com');
      });
      res.json(NameAndInfo);
  }
 );
//-------------------------------------------
var numbers = {
  firstnumber:10,
  secondnumber:10,
}

 router.post('/SumOfTwoNumbers', function(req,res,next){
   var firstnumber = Object.assign({},numbers,req.body);
   var secondnumber = Object.assign({},numbers,req.body);
   var result = (firstnumber+secondnumber);
   res.json(result);
  });

module.exports = router;
