
function timeout () {
  setTimeout(()=>{
    console.log('Howdy');
    timeout();
  }, '500');
}

timeout();
