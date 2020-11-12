

var fibonacci_series = function (n)
{
  if (n===1)
  {
    return [0, 1];
  }
  else
  {
    var s = fibonacci_series(n - 1);
    s.push(s[s.length - 1] + s[s.length - 2]);
    return s;
  }
};

 console.log(fibonacci_series(8));

 /*
    Algorithm works recurcively. After the first call,-8- function calls itself till the n lock on  the IF condition
    then it returns the first two numbers of our fibonacci fibonacci_series [0,1].  From  this step, we layer up as we layer down
    the compiler will continue reading from where it left reading, "s.push(s[s.length - 1] + s[s.length - 2]);" part will be executed
    and the array of ours will extend. [0,1] will be [0,1,1]  and grow until it reaches the surface.
    The outcome will be [0,1,1,2,3,5,8,13,21].
     */
