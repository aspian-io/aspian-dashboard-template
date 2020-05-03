var pd = require('persian-date/dist/persian-date.min.js');
window.persianDate = pd;
require('persian-datepicker/dist/js/persian-datepicker.js');

// to initiate date range
$(document).ready(function () {
  const dropDownBtnLink = document.querySelector('#selectedDateRange');
  const todayText = `<span class="text-light-gray">امروز: </span>${new persianDate().format(
    'DD MMMM'
  )}`;
  // to update dropdown btn text
  dropDownBtnLink.innerHTML = todayText;
});
// to set date on click on "Today" option in dorpdown menu
$('#todayDate').click(function () {
  const dropDownBtnLink = document.querySelector('#selectedDateRange');
  const todayText = `<span class="text-light-gray">امروز: </span>${new persianDate().format(
    'DD MMMM'
  )}`;
  // to update dropdown btn text
  dropDownBtnLink.innerHTML = todayText;
});
// to set date on click on "Yesterday" option in dropdown menu
$('#yesterdayDate').click(function () {
  const dropDownBtnLink = document.querySelector('#selectedDateRange');
  const yesterday = new persianDate().subtract('days', 1);
  const yesterdayText = `<span class="text-light-gray">دیروز: </span>${yesterday.format(
    'DD MMMM'
  )}`;
  // to update dropdown btn text
  dropDownBtnLink.innerHTML = yesterdayText;
});
// to set date on click on "Last 7 Days" option in dropdown menu
$('#lastSevenDays').click(function () {
  const dropDownBtnLink = $('#selectedDateRange');
  const now = new persianDate().format('DD MMMM');
  const lastSevenDays = new persianDate().subtract('days', 6);
  const lastSevenDaysText = `${lastSevenDays.format('DD MMMM')} - ${now}`;
  // to update dropdown btn text
  dropDownBtnLink.text(lastSevenDaysText);
});
// to set date on click on "Last 30 Days" option in dropdown menu
$('#lastThirtyDays').click(function () {
  const dropDownBtnLink = $('#selectedDateRange');
  const now = new persianDate().format('DD MMMM');
  const lastThirtyDayMonth = new persianDate().subtract('days', 29);
  const lastThirtyDaysText = `${lastThirtyDayMonth.format('DD MMMM')} - ${now}`;
  // to update dropdown btn text
  dropDownBtnLink.text(lastThirtyDaysText);
});
// to set date on click on "This Month" option in dropdown menu
$('#thisMonth').click(function () {
  const dropDownBtnLink = $('#selectedDateRange');
  const now = new persianDate();
  const thisMonthFirstDay = now.startOf('month').format('DD MMMM');
  const thisMonthText = `${thisMonthFirstDay} - ${now.format('DD MMMM')}`;
  // to update dropdown btn text
  dropDownBtnLink.text(thisMonthText);
});
// to set date on click on "Last Month" option in dropdown menu
$('#lastMonth').click(function () {
  const dropDownBtnLink = $('#selectedDateRange');
  const lastMonth = new persianDate().subtract('months', 1);
  const lastMonthFirstDay = lastMonth.startOf('month').format('DD MMMM');
  const lastMonthLastDay = lastMonth.endOf('month').format('DD MMMM');
  const lastMonthText = `${lastMonthFirstDay} - ${lastMonthLastDay}`;
  // to update dropdown btn text
  dropDownBtnLink.text(lastMonthText);
});
