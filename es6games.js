"use strict"; 
let obj = {
  x: 10,
  y: 20,

  get a() {
    return this.x +  this.y; 
  },

  set a(num) {
    this.x = num; 
    this.y = num + 50; 
  }
};

console.log(obj.a); 
obj.a(10); 
console.log(obj.a); 












// class Polygon {
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }
  
//   get area() {
//     return this.calcArea();
//   }

//   calcArea() {
//     return this.height * this.width;
//   }

//   doSomeStuff() {
//     console.log('Doing some stuff');
//   }
// }

// const square = new Polygon(10, 10);


// console.log(square.area);
// square.doSomeStuff();


//this.greeting = 'Yo';

// console.log(foo);
// console.log(bar);

// var foo = 10;
// let bar = 11; 

// let obj = {
//   myMethod1: ()=> {
//     console.log(this.greeting);
//   },
//   myMethod2() {
//     console.log(this.greeting);
//   },
//   greeting : 'Howdy'
// };

// obj.myMethod1();
// obj.myMethod2();

// console.log(this);

// let arr = [] ;

// for(let i = 0; i < 1000000; i++) {
//   arr.push(i); 
// }

// console.log(arr.length);

// for(let i = 0; i < 10000; i++) {
//   console.log(arr[i]);
// }

// for(let item of arr) {
//   console.log(item);
// }

