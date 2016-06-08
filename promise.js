'use strict';
/* global Promise */



function greetAfterWait(greeting, timeToWait) {
  timeToWait = timeToWait || 3000;

  if(timeToWait > 3000) throw new Error('Wait is too long');

  let myPromise = new Promise( (resolve, reject) => {
    setTimeout( ()=> {
      if(greeting === 'Hey baby') reject(new Error("We don't say that"));
      resolve(greeting, 'damn it!');
    }, timeToWait);
  });

  return myPromise; 
}

greetAfterWait('Yo!')
  .then((greeting) => {
    console.log(greeting); 
    return greetAfterWait('Allo!', 1000);
  })
  .then((greeting) => {
    console.log(greeting);
    return greetAfterWait('Hey baby', 1000); 
  })
  .then((greeting) => {
    console.log(greeting);
    return greetAfterWait('Howdy!', 4000); 
  })
  .then((greeting) => {
    console.log(greeting);
  })
  .catch((err) => {
    console.log(err); 
  });

console.log('I said....');