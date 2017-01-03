var express = require('express');
var bodyParser = require('body-parser');

var shows = [
  { title: 'Breaking Bad', rating: 9.8 },
  { title: 'Parks and Rec', rating: 9.1 },
  { title: 'Breaking Bad', rating: 9.8 }
];

var app = express();

app.use(bodyParser.json());

app.get('/shows', function (req, res, next) {
  res.status(200).json(shows);
});

app.post('/shows', function (req, res, next) {
  shows.push(req.body);
  res.status(200).json(shows);
});

app.delete('/shows', function (req, res, next) {
  var deletedShow = shows.pop();
  res.status(200).json(deletedShow);
});

app.listen(3000, function () {
  console.log('app starting on port 3000');
});
