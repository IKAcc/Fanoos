(function( $ ) {

    $.fn.fanoos = function(options) {

      var settings = $.extend({ // These are the defaults.
        animationClass: 'animated', // css animation univetsal class
        duration: 1000, // css animation duration (ms)
        offset: 0, // offset form top of the image
        delay: 0 // delay on playing animation
      }, options );

      var elementList = []; // a global list of fanoos elements

      function init() { // init function: gets all elements who need fanoos to animate them

        var elementNumber = 0; // start point of list

        $('.fanoos').each(function() { // for all fanoos element

          $(this).addClass(settings.animationClass).css({
            'animation-play-state': 'paused',
            'animation-duration': settings.duration + 'ms',
            'animation-delay': settings.delay + 'ms',
          }); // add animation class but don't let it play

          if ( $(this).attr('data-fanoos-id') == null || $(this).attr('data-fanoos-id').length == 0) { // if element didn't have a data-fanoos-id
            var fanoosId = 'fanoosElement' + elementNumber; // create a fanoos ID
            $(this).attr('data-fanoos-id', 'fanoosElement' + elementNumber); // and add it to data-fanoos-id
          } else {
            var fanoosId = $(this).attr('data-fanoos-id'); // or just use the one it has
          };

          var element = { // create a fannos element
            'fanoosID' : fanoosId, // ID
            'offsetTop'  : Math.ceil($(this).offset().top) + settings.offset // position from top
          }

          elementList.push(element); // add elment to list

          elementNumber++; // go for next elment
        });

      }

      function run(element) { // run function: play element's css animation
        element.css("animation-play-state", "running"); // play the animation
      }

      function action(){ // action function: connect run funtion to real world

        var resultList = $.grep(elementList, function(e){ // a list of fanoos elements that should be played
          return e.offsetTop <= ($(window).scrollTop() + $(window).height()); // just when bottom of window reached element
        });

        if (resultList.length > 0) { // if result list had any elements in it
          for (var i = 0; i < resultList.length; i++) {
            run( $('[data-fanoos-id="' + resultList[i].fanoosID + '"]') ); // play them one by one
          }
        }

      }

      init(); // initiate fanoos

      $(window).scroll(function(){ // do action when scrolling
        action();
      });

      $( document ).ready(function(){ // do action when document is loaded
        action();
      });

    }
}( jQuery ));
