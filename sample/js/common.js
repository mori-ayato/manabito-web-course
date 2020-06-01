$(function(){
  'use strict';

  $('#pageTop').on('click', function() {
    $('html, body').animate({
      scrollTop: 0
    }, 600);
  });
});
