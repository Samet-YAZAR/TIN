var express = require('express');
var router = express.Router();

router.post('/',((req, res) => {

  console.log(req.body)

  const number1 = parseInt(req.body.number1);
  const number2 = parseInt(req.body.number2);
  const operation = req.body.operation.toString();
  let result =0;

  if (operation ==='add'){
     result = number1 + number2;
  }
  else if (operation ==='subtract'){
     result = number1 - number2;
  }
  else if (operation ==='divide'){
     result = number1 / number2;
  }
  else if (operation ==='multiply'){
     result = number1 * number2;
  }
  else{
    res.json("No proper operation specified!")
  }

  res.json(result)

}))

module.exports = router;
