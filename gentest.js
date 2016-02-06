/*jshint esnext: true*/
fs = require('fs');

//fs.writeFile(file, data[, options], callback)
//fs.readFile(file[, options], callback)


function* myTest() {
  var sum;

  sum = yield add(1, 1);
  sum = yield add(sum, 1);
  sum = yield add(sum, 1);
  
  return sum;
}

function add(a, b) {
  return a + b;
}

var gen = myTest();
var output ={}; 
var i = 0;


do {
  output = gen.next(output.value);
  console.log(output);
} while (!output.done);

// console.log('done');


