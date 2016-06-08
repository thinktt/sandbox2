var fs = require('fs');
//fs.writeFile(file, data[, options], callback)
//fs.readFile(file[, options], callback)

// var theGenIns =myGenerator();


// function* myGenerator() {
//   var result;
//   result = yield fs.readFile('.eslintrc.json', 'utf8', theGenIns.next);
  
//   return result;
// }



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
console.log(gen.next());
console.log(gen.next(5));









// var output ={}; 
// var i = 0;



// do {
//   output = gen.next(output.value);
//   console.log(output);
// } while (!output.done);

// console.log('done');


