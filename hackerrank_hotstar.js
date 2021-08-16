function doSomething() {
  return new Promise((resolve, reject) => {
    reject();
    resolve();
  });
}

let p = doSomething();

p.then(() => {
  console.log("p1");
})
  .then(() => console.log("p2"))
  .catch(() => console.log("e1"))
  .then(() => console.log("p3"))
  .finally(() => {
    console.log("finally");
  });

var x = 3;
var char = "A";

var foo = {
  x: 2,
  foo: {
    x: 1,
    foo: function () {
      char = "B";
      return this.x;
    }
  }
};

var go = foo.foo.foo;
console.log(char, go(), foo.foo.foo());
console.log( go(), foo.foo.foo(), char);

var x = 10;
var y = 20;
var z = 30;

function foo() {
  function bar(x) {
    function footbar() {
      return x + y + z;
    }
    return footbar();
  }
  var z = 40;
  return bar;
}

var bar = foo();
console.log(bar(50));


1. Coding question :- parenthesis matching
