//...........Load modules used in the app.......
var express = require('express');//get the express framework
var app = express();// app becomes an instance of an express server
var morgan = require('morgan');//morgan is the express middleware logger
var bodyParser = require('body-parser');// for parsing json requset

//..............Load Config Vars.................
var port = process.env.PORT || 3000;


//...........Load in middleware................
app.use(morgan('dev')); // log all request and errors 
app.use(bodyParser.json()); //pareses json reuest
app.use(express.static('public'));//serve static files


//............Set up Routes............
app.get('/greeting', function(req, res) {
 res.json({greeting: 'Howdy World!'});
});

app.post('/greeting', function(req, res) {
  var name = req.body.name;
  res.json({greeting: 'Howdy ' + name + '!' });
});

app.get('/exit', function(req, res) {
 res.json({exit: 0});
 process.exit();
});


//.............Start the server............
app.listen(port, function(err) {
  if(err) {
    console.log('Unable to start server:');
    console.log(err);
  }
  else {
    console.log('Server listining on port ', port);
  }
});




// var i = 0; 
// var lastTime = new Date() / 1000; 

// function tick() { 
//   process.nextTick(() => {
//     i++;
    
//     if(i === 10000000) {
//       console.log((new Date() / 1000)-lastTime);
//       i = 0; 
//       lastTime = new Date() / 1000;
//       console.log(util.inspect(process.memoryUsage()));
//     }
    
//     process.nextTick(tick);
//   });
// }

// process.memoryUsage(); 

// tick(); 


// //for(;;){}


// /*//.............forever test.................

// console.log(forever);

// var child = new (forever.Monitor)('../forecasttool/bin/www', {
//   max: 3,
//   silent: false,
//   args: [],
//   killTree: true
// });

// child.on('exit', function () {
//   console.log('your-filename.js has exited after 3 restarts');
// });

// child.start();


// */









