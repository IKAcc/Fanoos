function init() {

  $('.fanoos').each(function() {
    $(this).addClass('animated').css("animation-play-state", "paused");
  })

}

function action(element) {
  element.css("animation-play-state", "running");
}

init()

$('#action').on('click', function(e) {

  var element = $('.fadeInLeft');

  action(element);
  e.preventDefault();
})
