var shows = require('../models/shows');

module.exports = {
  index: function (req, res, next) {
    if (req.query.genre) {
      var filteredShows = shows.filter(function (show) {
        return show.genre === req.query.genre;
      });
      res.status(200).json(filteredShows);
    } else {
      res.status(200).json(shows);
    }
  },

  show: function (req, res, next) {
    var showId = parseInt(req.params.id);
    res.status(200).json(shows[showId]);
  },

  last: function (req, res, next) {
    res.status(200).json(shows[shows.length - 1]);
  },

  create: function (req, res, next) {
    shows.push(req.body);
    res.status(200).json(shows);
  },

  destroy: function (req, res, next) {
    // var deletedShow = shows.splice(req.params.id, 1)[0];
    var splicedShows = shows.splice(req.params.id);
    // [{ title: 'Breaking Bad', rating: 9.8, genre: 'drama' }]
    var deletedShow = splicedShows[0];
    res.status(200).json(deletedShow);
  }
};
