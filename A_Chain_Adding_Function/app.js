console.log("super");
//sorta currying... really variadic function, indefinite arity
function add (n) {

    var v = function (x) {
        return add (n + x);
    };



    v.valueOf = function () {
        return n;
    };

    return v;

}
add(1)
add(1)(2)
add(1)(2)(3)
add(1)(2)(3)(4)

//curry with known amount or args...
//each "arg" = a function with a return
var add2 = function(n) {
  console.log('n', n);
  return function (x){
    console.log('x', x);
    console.log('sum two arg', n + x);
    return function (y){
      console.log('y', y);
      console.log('sum 3 args', n + x + y);
    }
  }
}

add2(1)
add2(1)(2)
add2(1)(2)(3)


//cleaning up the return statements
var curryIt = function(uncurried) {
  console.log(uncurried, "<<Function: chow");
  var parameters = Array.prototype.slice.call(arguments, 1);
  console.log(parameters,"<<chows parameters");
  return function() {
    return uncurried.apply(this, parameters.concat(
      Array.prototype.slice.call(arguments, 0)
    ));
  };
};

var chow = function(chow, comma, point, obsenity){
  console.log(chow + comma, obsenity + point);
};

var greeter = function(greeting, separator, emphasis, name) {
  console.log(greeting + separator + name + emphasis);
};

var greetHello = curryIt(greeter, "Hello", ", ", "?");
greetHello("Heidi"); //"Hello, Heidi?"
greetHello("Eddie"); //"Hello, Eddie?"

var sayGoodbye = curryIt(chow, "Get out of here", ",", "!")
sayGoodbye("Sam")
sayGoodbye("Jabronee!")
