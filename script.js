$(document).ready(function(){

//STICKY NAV
  let navOffset = $('.about-section').offset().top;

  $('nav').wrap('<div class= "nav-placeholder"></div>');
  $('.nav-placeholder').height($('nav').outerHeight());

  $(window).scroll(function(){
    let scrollPos = $(window).scrollTop();

    if (scrollPos >= navOffset) {
      $('nav').addClass('fixed');
    }else {
      $('nav').removeClass('fixed');
    }
  });




  //SMOOTH SCROLLING SNIPPET*******************



  // Select all links with hashes
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



  //ANIMATE NAV LINK ON SCROLL

  let scrollLink = $('.scroll');

  $(window).scroll(function(){
    let scrollBarLocation =$(this).scrollTop();

    scrollLink.each(function(){
      let sectionOffset = $(this.hash).offset().top;

      if (sectionOffset <= scrollBarLocation) {
        $(this).parent().addClass('no-hover');
        $(this).parent().siblings().removeClass('no-hover');
        $(this).parent().addClass('underline');
        $(this).parent().siblings().removeClass('underline');
      }
    });
  });

});
