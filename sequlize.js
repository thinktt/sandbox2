var Sequelize = require('sequelize');
var sequelize = new Sequelize('scratch', 'axc1888', 'axc1888', {
  host: 'localhost',
  dialect: 'mysql'
});

var User = sequelize.define('user', {
  username: Sequelize.STRING,
  fname: Sequelize.STRING,
  birthday: Sequelize.DATE
});

sequelize.sync().then(function() {
  return User.create({
    username: 'bob1',
    fname: "Robert",
    birthday: new Date(1980, 6, 20)
  });
}).then(function(jane) {
  console.log(jane.get({
    plain: true
  }));
});
