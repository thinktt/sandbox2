this.x = 9; 
var Funk = function() {
  this.superDuper = 'neat';

  says = 'Howdy';

  var obj = {};

  Object.defineProperties(this, {
    'says' : {
      get: function () {
        return says;
      },
      set: function(value) {
        says = value;
      },
      enumerable: true
    }
  });

  obj.says = 'Hello';

   console.log(obj.says);
   console.log(obj);

};

Funk.prototype = {
  superDuper: 'cool'
};

funky1 = new Funk();

console.log(funky1);


this.x = 20; 


var coolObj = {
  x : 100,
  getX : function () {
    return this.x; 
  }
};


console.log(coolObj.getX());
var getX = coolObj.getX;
console.log(getX());





/*(function() {

  function foo() {
    this.x = 77;
    console.log(this.x);
  }

  foo();
  console.log(this.x);

}());

function foo() {
  this.x = 77;
  console.log(this.x);
}

foo();
console.log(this.x);

console.log(this);
console.log(module.exports);
console.log(exports);
*/