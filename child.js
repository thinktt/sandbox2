const fork = require('child_process').fork;
const execFile = require('child_process').execFile;
var server, heartbeat; 

//...start the server for first time....
console.log('Starting Server');
server = fork('server');
registerServerEvents(server);  
server.send('Howdy there Server!');
setTimeout(checkHeartBeat, 5000);



//.....register events for the sever.....
function registerServerEvents (server) {

server.on('close', (code) => {
  console.log('Server exited on code ' + code);
  console.log('Restarting Server');
  server = fork('server');
  // registerServerEvents(server); 
  // server.send('Howdy there Server!');
  heartbeat = true;
  setTimeout(checkHeartBeat, 5000);
});

server.on('message', (message) => {
  heartbeat = message; 
});

}


//.......checks if the server is alive....
function checkHeartBeat() {
  if(heartbeat) {
    console.log('Server is alive');
    //clear the heart beat and send request for a new one
    heartbeat = null; 
    server.send('Howdy there Server!');
    setTimeout(checkHeartBeat, 5000);
  } else {
    console.log('Server looks stuck...killing');
    server.kill();
  }
}