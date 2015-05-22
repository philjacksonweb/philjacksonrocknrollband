$('document').ready(function() {
  var options = { videoId: 'cBh-WqlQ0JU', mute: false};
  $('#wrapper').tubular(options);

  $('header .btn').click(function(event) {
    event.preventDefault();
    $(this).modal({
          zIndex: 100,
        });
  });
  
  $( "a.volume" ).click(function() {
    $( this ).toggleClass( "mute" );
  });
});