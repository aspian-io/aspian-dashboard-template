// Recalculate topbar width based on new viewport size
export function addSubheaderRecalcWidth() {
  $('.omd-subheader').addClass('omd-subheader--recalc-width');
}

export function removeSubheaderRecalcWidth() {
  $('.omd-subheader').removeClass('omd-subheader--recalc-width');
}
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
    console.log('fired this');
    if ($('.omd-subheader__date-range').has(e.target).length === 0) {
      $('#dashboardCustomDateRange').removeClass(
        'omd-subheader__date-range-menu--show'
      );
    }
  });
