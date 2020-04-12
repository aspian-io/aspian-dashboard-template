$(document).ready(function() {
  $('input[id^=file]').hide();
  $('.browse').click(function() {
    $(this)
      .closest('form')
      .find('input[id^=file]')
      .click();
  });
});
