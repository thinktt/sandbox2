const fork = require('child_process').fork;
const execFile = require('child_process').execFile;
var server; 

//...start the server for first time....
console.log('Starting Server');
server = fork('server');

server.on('close', (code) => {
  console.log('Server exited on code ' + code);
  console.log('Restarting Server');
  server = fork('server');
});

