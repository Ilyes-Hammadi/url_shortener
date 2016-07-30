var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  Url = mongoose.model('Url');

module.exports = (app) => {
  app.use('/', router);
};

router.get('/', (req, res, next) => {

  Url.find((err, urls) => {
    if (err) return next(err);
    res.render('index', {
      title: 'Generator-Express MVC',
      urls: urls
    });
  });


});

router.get('/new/', (req, res) => {

  // Return error if url param is null
  if (!(/\S/.test(req.param('url')))) {
    res.json({
      'message': 'there are no url'
    });
    return;
  }
  // The input url param
  var urlParam = req.param('url');

  // Get the url that is passed in the params
  var url = new Url({original_url: urlParam});

  // Create the new url entry in the database
  url.save((err) => {
    if (err) console.log(err);
  });

  // Return a json object with the shorteded and the original url
  res.json({
    short_url: req.headers.host + '/' + url._id,
    original_url: url.original_url
  })
});

router.get('/:key', (req, res) => {
  Url.findOne({_id: req.params.key}, (err, url) => {
    if (err) {
      res.render('error', {error: err})
    } else {
      console.log(url);
      res.redirect('http://' + url.original_url);
    }
  });
});
