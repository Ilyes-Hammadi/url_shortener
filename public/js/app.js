$(document).ready(function () {

  $('.hostname').text(window.location.host);
  $('li a').attr('href', 'http://' + window.location.host + '/new/?url=http://google.com');

  $('#get-url-btn').click(function () {
    var url = $('#url-input').val();

    // If the input is not empty
    if (/\S/.test(url)) {
      $.get('/new', {url: url}, function (res) {
        $('#response').html('<a href="http://' + res.short_url + '" target="_blank">http://' + res.short_url + '</a>');
      })
    }
  })
});
