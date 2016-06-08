var request = require('superagent');
var os = require('os');

var date = Date.now().toString();
var ifaces = os.networkInterfaces();
var ips = []; 

Object.keys(ifaces).forEach(function (ifname) {
  var alias = 0;

  ifaces[ifname].forEach(function (iface) {
    if ('IPv4' !== iface.family || iface.internal !== false) {
      // skip over internal (i.e. 127.0.0.1) and non-ipv4 addresses
      return;
    }

    ips.push(iface.address);
  });
});

request
  .patch('https://forecasttool2-qa.apps-np.homedepot.com/api/projects/IT-00012')
  .send({
    "name": date,
    "comment": ips.toString()
    })
  .set('Accept', 'application/json')
  .end((err, res) => {
    if(err) console.log(err);
    else console.log(res.body);
  });