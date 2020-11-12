
function Fibonacci (n){

    if(n===1) {
      return[0,1];
    }
    else {

      var s = Fibonacci(n-1);
      s.push (s[s.length-2]+s[s.length-1]);
      return s;
    }

};
console.log(Fibonacci(8));
