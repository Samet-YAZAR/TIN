
function factorial (x) {

  if(x === 0 )
  {
    return 1 ;
  }
  return x * factorial(x-1);

}

function factorialize(num) {
  var factorial = 1;
  for (var i = 2; i <= num; i++) {
    factorial *= i;
  }
  return factorial;
}


console.console.log(factorial(5));
console.console.log(factorialize(10));
