var elementList = []; // a global list of fanoos elements

function init() { // init function: gets all elements who need fanoos to animate them

  var elementNumber = 0; // start point of list

  $('.fanoos').each(function() { // for all fanoos element

    $(this).addClass('animated').css("animation-play-state", "paused"); // add animation class but don't let it play

    if ( $(this).attr('data-fanoos-id') == null || $(this).attr('data-fanoos-id').length == 0) { // if element didn't have a data-fanoos-id
      var fanoosId = 'fanoosElement' + elementNumber; // create a fanoos ID
      $(this).attr('data-fanoos-id', 'fanoosElement' + elementNumber); // and add it to data-fanoos-id
    } else {
      var fanoosId = $(this).attr('data-fanoos-id'); // or just use the one it has
    };

    var element = { // create a fannos element
      'fanoosID' : fanoosId, // ID
      'offsetTop'  : $(this).offset().top // position from top
    }

    elementList.push(element); // add elment to list

    elementNumber++; // go for next elment
  });

}

function action(element) {
  element.css("animation-play-state", "running"); // run the animation
}

init();

$('#action1').on('click', function(e) {

  var element = $('[data-fanoos-id="' + elementList[0].fanoosID + '"]')
  action(element);
  e.preventDefault();
})


$('#action2').on('click', function(e) {

    var element = $('[data-fanoos-id="' + elementList[1].fanoosID + '"]')

    action(element);
  e.preventDefault();
})


$('#action3').on('click', function(e) {

    var element = $('[data-fanoos-id="' + elementList[2].fanoosID + '"]')

    action(element);
  e.preventDefault();
})
