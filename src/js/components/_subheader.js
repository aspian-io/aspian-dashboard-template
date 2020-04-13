// to initiate date range
$(document).ready(function () {
  const dropDownBtnLink = document.querySelector('#selectedDateRange');
  const now = new Date();
  const month = now.toLocaleString('default', { month: 'short' });
  const todayText = `<span class="text-light-gray">Today: </span>${month} ${now.getDate()}`;
  // to update dropdown btn text
  dropDownBtnLink.innerHTML = todayText;
});
// to set date on click on "Today" option in dorpdown menu
$('#todayDate').click(function () {
  const dropDownBtnLink = document.querySelector('#selectedDateRange');
  const now = new Date();
  const month = now.toLocaleString('default', { month: 'short' });
  const todayText = `<span class="text-light-gray">Today: </span>${month} ${now.getDate()}`;
  // to update dropdown btn text
  dropDownBtnLink.innerHTML = todayText;
});
// to set date on click on "Yesterday" option in dropdown menu
$('#yesterdayDate').click(function () {
  const dropDownBtnLink = document.querySelector('#selectedDateRange');
  const now = new Date();
  const yesterday = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() - 1
  );
  const month = yesterday.toLocaleString('default', { month: 'short' });
  const yesterdayText = `<span class="text-light-gray">Yesterday: </span>${month} ${yesterday.getDate()}`;
  // to update dropdown btn text
  dropDownBtnLink.innerHTML = yesterdayText;
});
// to set date on click on "Last 7 Days" option in dropdown menu
$('#lastSevenDays').click(function () {
  const dropDownBtnLink = $('#selectedDateRange');
  const now = new Date();
  const currentMonth = now.toLocaleString('default', { month: 'short' });
  const lastSevenDays = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() - 6
  );
  const lastSevenDayMonth = lastSevenDays.toLocaleString('default', {
    month: 'short',
  });
  const lastSevenDaysText = `${lastSevenDayMonth} ${lastSevenDays.getDate()} - ${currentMonth} ${now.getDate()}`;
  // to update dropdown btn text
  dropDownBtnLink.text(lastSevenDaysText);
});
// to set date on click on "Last 30 Days" option in dropdown menu
$('#lastThirtyDays').click(function () {
  const dropDownBtnLink = $('#selectedDateRange');
  const now = new Date();
  const currentMonth = now.toLocaleString('default', { month: 'short' });
  const lastThirtyDays = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() - 29
  );
  const lastThirtyDayMonth = lastThirtyDays.toLocaleString('default', {
    month: 'short',
  });
  const lastThirtyDaysText = `${lastThirtyDayMonth} ${lastThirtyDays.getDate()} - ${currentMonth} ${now.getDate()}`;
  // to update dropdown btn text
  dropDownBtnLink.text(lastThirtyDaysText);
});
// to set date on click on "This Month" option in dropdown menu
$('#thisMonth').click(function () {
  const dropDownBtnLink = $('#selectedDateRange');
  const now = new Date();
  const currentMonth = now.toLocaleString('default', { month: 'short' });
  const thisMonthFirstDay = new Date(now.getFullYear(), now.getMonth(), 1);
  const thisMonthText = `${currentMonth} ${thisMonthFirstDay.getDate()} - ${currentMonth} ${now.getDate()}`;
  // to update dropdown btn text
  dropDownBtnLink.text(thisMonthText);
});
// to set date on click on "Last Month" option in dropdown menu
$('#lastMonth').click(function () {
  const dropDownBtnLink = $('#selectedDateRange');
  const now = new Date();
  const lastMonthFirstDay = new Date(now.getFullYear(), now.getMonth() - 1, 1);
  const lastMonthLastDay = new Date(now.getFullYear(), now.getMonth(), 0);
  const lastMonth = lastMonthFirstDay.toLocaleString('default', {
    month: 'short',
  });
  const lastMonthText = `${lastMonth} ${lastMonthFirstDay.getDate()} - ${lastMonth} ${lastMonthLastDay.getDate()}`;
  // to update dropdown btn text
  dropDownBtnLink.text(lastMonthText);
});
