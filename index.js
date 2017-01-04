var express = require('express');
var bodyParser = require('body-parser');

var showsController = require('./controllers/shows_controller');

var logQuery = function (req, res, next) {
  console.log(req.path);
  console.log(req.query);
  next();
};

var app = express();

app.use(bodyParser.json());

// app.use(logQuery);

app.get('/shows', logQuery, showsController.index);
app.get('/shows/last', showsController.last);
app.get('/shows/:id', showsController.show);
app.post('/shows', logQuery, showsController.create);
app.delete('/shows/:id', showsController.destroy);

app.listen(3000, function () {
  console.log('app starting on port 3000');
});
