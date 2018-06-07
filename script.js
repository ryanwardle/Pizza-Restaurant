$(document).ready(function(){

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

});
