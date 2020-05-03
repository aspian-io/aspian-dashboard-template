//require('pdfmake');
require('datatables.net-bs4');
//require('datatables.net-buttons-bs4');
//require('datatables.net-buttons/js/buttons.html5.js');
//require('datatables.net-buttons/js/buttons.print.js');
//require('datatables.net-fixedheader-bs4');
require('datatables.net-responsive-bs4');
//require('datatables.net-rowgroup-bs4');
//require('datatables.net-scroller-bs4');
//require('datatables.net-searchpanes-bs4');
//require('datatables.net-select-bs4');

$(document).ready(function () {
  $('#basicDataTable').DataTable({
    //ordering: false,
    info: false,
    responsive: true,
    searching: false,
    lengthChange: false,
    pageLength: 5,
    pagingType: 'simple',
  });
});
