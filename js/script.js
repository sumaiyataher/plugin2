 //js
 wow = new WOW(
  {
  boxClass:     'wow',      // default
  animateClass: 'animated', // default
  offset:       0,          // default
  mobile:       true,       // default
  live:         true        // default
}
)
wow.init();


 
  //jq
 
 $(document).ready(function (params) {




   
//counterup start

    $('.counter').counterUp({
      delay: 10,
      time: 1000
  });

  // mixitup start
var mixer = mixitup('#hellow', {
  
  animation: {
      duration: 300
  }
});

// lightbox start
lightbox.option({
      'resizeDuration': 200,
      'wrapAround': true
    })



// countdown 360
  $("#countdown").countdown360({
    radius      : 60,
    seconds     : 100,
    strokeWidth : 15,
    fillStyle   : '#0276FD',
    strokeStyle : '#003F87',
    fontSize    : 50,
    fontColor   : '#FFFFFF',
    autostart: false,
    onComplete  : function () { console.log('completed') }
  }).start()

  $('#demo').animationCounter({
        start: 10,
        end: 500
      });

  // Aos
AOS.init({
	offset: 100,
	delay: 50,
	duration: 500,
	easing: 'linear'

});
// preloader
$('.js-preloader').preloadinator({
  scroll: false,
  minTime: 300,
  animation: 'fadeOut',
  animationDuration: 400,

});

});



