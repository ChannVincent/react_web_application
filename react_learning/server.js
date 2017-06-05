var express = require('express');

// create our app
var app = express();

// add functionnality to your express application
app.use(express.static('public'));

// start the server on port 3000 with function()
app.listen(3000, function () {
  console.log('Express server is up on port 3000');
});
