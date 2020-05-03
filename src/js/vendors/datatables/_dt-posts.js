import { activateDtSelectAll } from './_selectAllCheckbox';
const jsZip = require('jszip');
window.JSZip = jsZip;
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

require('datatables.net-bs4');
require('datatables.net-buttons-bs4');
require('datatables.net-buttons/js/buttons.flash.js');
require('datatables.net-buttons/js/buttons.html5.js');
require('datatables.net-buttons/js/buttons.print.js');
//require('datatables.net-fixedheader-bs4');
require('datatables.net-responsive-bs4');
//require('datatables.net-rowgroup-bs4');
//require('datatables.net-scroller-bs4');
//require('datatables.net-searchpanes-bs4');
require('datatables.net-select-bs4');

$(document).ready(function () {
  // Setup - add a text input to each footer cell
  // $('#postsDataTable thead tr').clone(true).appendTo('#postsDataTable thead');
  // $('#postsDataTable thead tr:eq(1)').addClass('d-none d-md-block');
  // $('#postsDataTable thead tr:eq(1) th').each(function (i) {
  //   if (!$(this).hasClass('dt__select-all-checkbox')) {
  //     var title = $(this).text();
  //     $(this).html(
  //       '<input type="search" class="form-control form-control-sm font-size--06 shadow-none" placeholder="Search ' +
  //         title +
  //         '" />'
  //     );

  //     $('input', this).on('keyup change', function () {
  //       if (postsDT.column(i).search() !== this.value) {
  //         postsDT.column(i).search(this.value).draw();
  //       }
  //     });
  //   }
  // });

  const postsDT = $('#postsDataTable').DataTable({
    buttons: [
      {
        extend: 'print',
        text:
          '<div class="d-inline-block text-center mr-1" style="width: 20px;"><i class="fas fa-print text-info"></i></div>Print',
        className: 'dropdown-item text-muted font-size--08 font-weight--300',
      },
      {
        extend: 'pdf',
        text:
          '<div class="d-inline-block text-center mr-1" style="width: 20px;"><i class="far fa-file-pdf text-danger"></i></div>PDF',
        className: 'dropdown-item text-muted font-size--08 font-weight--300',
      },
      {
        extend: 'excel',
        text:
          '<div class="d-inline-block text-center mr-1" style="width: 20px;"><i class="far fa-file-excel text-success"></i></div>Excel',
        className: 'dropdown-item text-muted font-size--08 font-weight--300',
      },
      {
        extend: 'csv',
        text:
          '<div class="d-inline-block text-center mr-1" style="width: 20px;"><i class="fas fa-file-csv text-warning"></i></div>CSV',
        className: 'dropdown-item text-muted font-size--08 font-weight--300',
      },
    ],

    orderCellsTop: true,
    responsive: {
      details: {
        type: 'column',
      },
    },
    columnDefs: [
      { responsivePriority: 1, targets: 1 },
      { responsivePriority: 1, targets: 2 },
      { responsivePriority: 2, targets: -1, orderable: false },
      {
        orderable: false,
        className: 'control',
        targets: 0,
      },
      {
        orderable: false,
        className: 'select-checkbox',
        targets: 1,
      },
    ],
    select: {
      style: 'multi',
      selector: 'td.select-checkbox',
    },
    order: [[7, 'asc']],
    searching: true,
    lengthChange: true,
    pageLength: 10,
    pagingType: 'simple_numbers',

    language: {
      paginate: {
        first: '<<',
        last: '>>',
        next: '>',
        previous: '<',
      },
    },
  });

  postsDT.buttons().container().appendTo($('#postsDtActionMenu'));

  // activate select all posts checkbox functionality
  activateDtSelectAll('dtSelectAllCheckbox', 'dtSelectAllPosts', postsDT);

  // enabling delete btn after selecting a records
  postsDT.on('select', function (e, dt, type, indexes) {
    $('#deleteSelectedBtn').removeClass('disabled');
  });

  // disabling delete btn after deselecting all records
  postsDT.on('deselect', function (e, dt, type, indexes) {
    const count = postsDT.rows({ selected: true }).count();

    if (count == 0) {
      $('#deleteSelectedBtn').addClass('disabled');
    }
  });

  // window resize event
  $(window).resize(function () {
    postsDT.responsive.recalc();
  });

  // recalculate datatables width with sidebar's width changing
  $(document).on('sidebarChanging', function () {
    postsDT.responsive.recalc();
  });

  //  recalculate datatables width after sidebar's width changed
  $(document).on('sidebarChanged', function () {
    postsDT.responsive.recalc();
  });
});
