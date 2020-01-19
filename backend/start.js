const mongoose = require('mongoose');

require('dotenv').config({ path: 'variables.env' });

// Connect to db and handle bad connections
mongoose.set('useUnifiedTopology', true); // prevents some errors about deprecated components
mongoose.connect(process.env.DATABASE, { useNewUrlParser: true });
mongoose.Promise = global.Promise; // Tell mongoose to use ES6 promises
mongoose.connection.on('error', (err) => {
  console.error(err.message);
});

// Start our app!!
const app = require('./app');

app.set('port', process.env.PORT || 7777);
const server = app.listen(app.get('port'), () => {
  console.log(`Express is running -> PORT ${server.address().port}`);
});
