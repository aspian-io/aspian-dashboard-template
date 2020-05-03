import PerfectScrollbar from 'perfect-scrollbar';

// Enable Bootstrap 4.4 tooltip for daterange
$(function () {
  $('#dashboardDateRange').tooltip();
});
// to hide tooltip on click on subheader date range btn
$('#dashboardDateRange').click(function () {
  $(this).tooltip('hide');
});

// date range dropdown
$('#dashboardCustomDateRangeBtn').on('click', function (e) {
  $('#dashboardCustomDateRange').toggleClass(
    'omd-subheader__date-range-menu--show'
  );
});

$('#dateRangePickerApply').on('click', function () {
  const dropDownBtnLink = $('#selectedDateRange');
  const fromDate = $('#dateRangeFrom').val();
  const toDate = $('#dateRangeTo').val();

  const fromTo = fromDate + ' - ' + toDate;
  dropDownBtnLink.text(fromTo);

  $('#dashboardCustomDateRange').removeClass(
    'omd-subheader__date-range-menu--show'
  );
});

$('#dateRangePickerCancel').on('click', function () {
  $('#dashboardCustomDateRange').removeClass(
    'omd-subheader__date-range-menu--show'
  );
});

// to close date range dropdown on click on body except dropdown itself
$('body')
  .add('#dashboardDateRange')
  .on('click', function (e) {
    if ($('.omd-subheader__date-range').has(e.target).length === 0) {
      $('#dashboardCustomDateRange').removeClass(
        'omd-subheader__date-range-menu--show'
      );
    }
  });

$(document).ready(function () {
  const windowHeight = $(window).height();

  if (windowHeight < 768) {
    // Perfect-scrollbar for subheader date range picker dropdown
    // for viewport height less than 768
    const dateRangePs = new PerfectScrollbar('#datePickerWrapper');
  }
});

// tracking window resizing
$(window).resize(function () {
  const windowHeight = $(window).height();
  // check if Perfect-scrollbar hasn't been set yet
  if (windowHeight < 768) {
    if (!$('#datePickerWrapper').hasClass('ps')) {
      const dateRangePs = new PerfectScrollbar('#datePickerWrapper');
    }
  }
});
