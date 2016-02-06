const fork = require('child_process').fork;
const execFile = require('child_process').execFile;
var child; 

//...start the server for first time....
child = execFile('node', ['server'], restartServer);
console.log('Starting Server');
registerListeners(child);


//when child process ends this is run to restart the server
function restartServer (err, stdout, stderr) {
  console.log('Restarting server');
  child = execFile('node', ['server'], restartServer);
  registerListeners(child);
}

//this registeres listeners on the newley started server
function registerListeners (child) {
  child.stdout.on('data', (data) => {
    data = data.substring(0, data.length - 1);
    console.log(data);
  });

  child.stderr.on('data', (data) => {
   console.log(data);
  });

  return child; 
}





// const child_process = require('child_process');
// const kid = child_process.spawn('node', ['server.js']);

// kid.stdout.on('data', (data) => {
//  console.log(data);
// });


// const kid = spawn('node', ['kid.js']);

// kid.stdout.on('data', (data) => {
//  console.log(data);
// });

// kid.stderr.on('data', (data) => {
//  console.log('error from child:');
//  console.log(data);
// });

// kid.on('close', (code) => {
//   console.log(`child process exited with code ${code}`);
// });


// ls.stdout.on('data', (data) => {
//   console.log(`stdout: ${data}`);
// });

// ls.stderr.on('data', (data) => {
//   console.log(`stderr: ${data}`);
// });

// ls.on('close', (code) => {
//   console.log(`child process exited with code ${code}`);
// });


// var greeting = 'Howdy'; 
// console.log(`I say ${greeting}`);
