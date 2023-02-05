const { connect, connection } = require('mongoose');

connect('mongodb://localhost/user', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;