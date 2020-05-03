// apply these after page loaded completely
$(window).on('load', function () {
  // prevent using transition on loading
  $('body').removeClass('preload');
});

// initialize all Bootstrap tooltips
$(function () {
  $('[data-toggle="tooltip"]').tooltip(); 
});