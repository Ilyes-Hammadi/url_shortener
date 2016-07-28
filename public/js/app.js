$(document).ready(function () {
  $('#get-url-btn').click(function () {
    var url = $('#url-input').val();

    $.get('/new', {url: url}, function (res) {
      $('#response').html('<a href="http://' + res.short_url + '" target="_blank">' + res.short_url + '</a>');
    })
  })
});
