var elementList = [];

function init() {

  var elementNumber = 0;

  $('.fanoos').each(function() {

    $(this).addClass('animated').css("animation-play-state", "paused");

    if ( $(this).attr('data-fanoos-id') == null || $(this).attr('data-fanoos-id').length == 0) {
      var fanoosId = 'fanoosElement' + elementNumber;
      $(this).attr('data-fanoos-id', fanoosId);
    } else {
      var fanoosId = $(this).attr('data-fanoos-id');
    };

    console.log(fanoosId)
    console.log($(this).offset().top);

    elementNumber++;
  })


}

function action(element) {
  element.css("animation-play-state", "running");
}

init()

$('#action1').on('click', function(e) {

  var element = $('.fadeInLeft');

  action(element);
  e.preventDefault();
})


$('#action2').on('click', function(e) {

    var element = $('.tada');

    action(element);
  e.preventDefault();
})


$('#action3').on('click', function(e) {

    var element = $('.fadeInRight');

    action(element);
  e.preventDefault();
})
