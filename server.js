var express = require('express');

// create our app
var app = express();
const PORT = process.env.PORT || 3000;

// workaround for weather API to work
app.use(function (req, res, next) {
  if (req.headers['w-forwarded-proto'] === 'https') {
    res.redirect('http://' + req.hostname + req.url);
  }
  else {
    next();
  }
});

app.use(express.static('public'));

// start the server on port 3000 with function()
app.listen(PORT, function () {
  console.log('Express server is up on port ' + PORT);
});
