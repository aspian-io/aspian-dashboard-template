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
