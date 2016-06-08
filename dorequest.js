var request = require('request');
var port = process.env.PORT || 3000;

request.get({
    uri: 'http://127.0.0.1:'+ port +'/heartbeat',
    json: true
  },
  function(err, res, object) {
    if(err) console.log(err);
    else console.log(object.heartbeat);
   }
);

