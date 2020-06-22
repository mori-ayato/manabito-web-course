$(function(){
  'use strict';

  let pageTop = function ( time ) {
    $('html, body').animate({
      scrollTop: 0
    }, time);
  }



  $('#pageTop').on('click', function() {
    pageTop(600);
    });


  $('#slideshow').bxSlider({
    auto: true,
    controls: false,
    mode: 'fade',
    pager: false,
    speed: 1000,
    touchEnabled: false
  });
});
