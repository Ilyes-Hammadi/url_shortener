// Example model

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var Url = new Schema({
  original_url: String
});

Url.virtual('date')
  .get(function(){
    return this._id.getTimestamp();
  });

mongoose.model('Url', Url);

