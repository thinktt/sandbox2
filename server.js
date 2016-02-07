var app = require('express')();
var morgan = require('morgan');
var bodyParser = require('body-parser');
var port = process.env.PORT || 3000;

//...........Load in middleware................
app.use(morgan('dev')); 
app.use(bodyParser.json());

//............Set up Routes............
app.get('/greeting', (req, res) => {
 res.json({greeting: 'Howdy World!'});
});

//.............Start the server............
app.listen(port, (err) => {
  if(err) {
    console.log('Unable to start server:');
    console.log(err);
  }
  else {
    console.log('Server listining on port ', port);
  }
});

//listen and respond to heartbeat request from parent
process.on('message', (message) => {
  if(message && message.request === 'heartbeat') {
    process.send({heartbeat: 'thump'});
  }
});

//block the even loop after 30 seconds 
setTimeout(() => {
  for(;;){}
}, 30000);

