var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
//------------------------------------------------------------------------------
var ExamArray = [];
var ExamOfPupilInfo ={
  Name:"Nelson Rivera",AccoutNumber:"0801_1991_12867",Email:"naracs1991@gmail.com"
}

var SumNumbers =[];
var Sum={ FirstNumber:"",SecondNumber:"",Answer:""}

  router.get("/AccoutNumber", function(req,res,next){
    res.send(ExamOfPupilInfo);
  });

  router.get('/SumOfTwoNumbers', function(req,res,next){
    res.render('SumOfTwoNumbers',{});
  });

  router.post('/SumOfTwoNumbers', function(req,res,next){
    console.log(req.body);
    var DataRegistry = Object.assign({},Sum);
        DataRegistry.FirstNumber = parseInt( req.body.txtFirstNumber);
        DataRegistry.SecondNumber = parseInt(req.body.txtSecondNumber);
        DataRegistry.Answer = DataRegistry.FirstNumber + DataRegistry.SecondNumber;
      SumNumbers.push(DataRegistry);
     console.log(SumNumbers);
    var dataX = Object.assign({}, req.body);
        dataX.digits = SumNumbers;
          res.render('SumOfTwoNumbers', dataX);
  });
//------------------------------------------------------------------------------
module.exports = router;
