$('document').ready(function() {
  var options = { videoId: 'cBh-WqlQ0JU',};
  $('#wrapper').tubular(options);
});


$('header .btn').click(function(event) {
  event.preventDefault();
  $(this).modal({
        zIndex: 100,
      });
});