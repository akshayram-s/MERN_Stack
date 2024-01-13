//closure: one function returning its nested function
//Function can return number,string,boolean and also a function
function outer() {
  alert("outer");
  function inner() {
    alert("inner");
  }
  return inner;
}
var res = outer();
//if outer is given the value will be outer
alert(res);
alert(typeof res);
