// this ensures that this code will only run after the document has loaded
$(document).ready(function() {

// QUOTES - slick slider

// if we don't want the slides to be randomized
// $('.slider').slick({
  // infinite:true,
  // slideToShow: 1,
  // slidesToScroll: 1,
  // autoplay: true,
  // autoplaySpeed: 5000
// });

// for randomizing slides
$.fn.randomize = function(selector){
  var $elems = selector ? $(this).find(selector) : $(this).children(),
      $parents = $elems.parent();

  $parents.each(function(){
      $(this).children(selector).sort(function(){
          return Math.round(Math.random()) - 0.5;
      }).detach().appendTo(this);
  });

  return this;
};

// randomize the slides and then call slick
$('.slick-slider').find('.slider').randomize('.slide');

// configuring the slick slider
$('.slick-slider').find('.slider').slick({
    fade: true,
    lazyLoad: 'ondemand',
    speed: 700,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    slideToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true, // true is the default
    cssEase: 'linear'
});



// CONTACT FORM - fox holder
jQuery('.contact-form').foxholder({
  placeholderDemo: 3 // 11
});



// NAVIGATION SCROLL
  /*
  // Smooth Scroll with jQuery
  https://css-tricks.com/snippets/jquery/smooth-scrolling/
  jQuery can also do this. Here's the code to perform a smooth page scroll to an anchor on the same page. It has some logic built in to identify those jump links, and not target other links.
  */
  // Select all links with hashes
  $(function() {
    $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
        && 
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000, function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
              return false;
            } else {
              $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            };
          });
        }
      }
    });
  });



  // STICKY NAVIGATION
  $("#about").waypoint(function(direction) {
    if(direction == "down") {
      $("nav").addClass("sticky");
    } else {
      $("nav").removeClass("sticky");
    }
  }, {
    // will happen 60px before we hit the #about
    offset: '60px'
  });



  // MOBILE NAVIGATION
  $(".js--nav-icon").click(function() {
    var nav = $(".js--main-nav");
    var icon = $(".js--nav-icon i")

    // when we click on the nav icon it opens the main navigation in 0.2s
    nav.slideToggle(200);

    if(icon.hasClass("fa-bars")) {
      icon.addClass("fa-times");
      icon.removeClass("fa-bars");
    } else {
      icon.addClass("fa-bars");
      icon.removeClass("fa-times");
    } 
  });



  // COUNTER UP
  // https://github.com/bfintal/Counter-Up
  jQuery(document).ready(function($) {
    $('.counter').counterUp({
        delay: 10, // the delay in milliseconds per number count up
        time: 800 // the total duration of the count up animation
    });
  });



  // COUNTER
  // $('.counter').each(function() {
  //   var $this = $(this),
  //       countTo = $this.attr('data-count');    
  //   $({ countNum: $this.text()}).animate({
  //     countNum: countTo
  //   },  
  //   {  
  //     duration: 500,
  //     easing:'linear',
  //     step: function() {
  //       $this.text(Math.floor(this.countNum));
  //     },
  //     complete: function() {
  //       $this.text(this.countNum);
  //     }  
  //   });  
  // });



  // SEND ICON ANIMATION
  $(".count").waypoint(function(direction) {
    $(".count").addClass("count");
  }, {
    offset: "50%" // half of the page
  })

});