import { activateDtSelectAll } from './_selectAllCheckbox';
const jsZip = require('jszip');
window.JSZip = jsZip;
// import pdfMake from 'pdfmake/build/pdfmake';
// import pdfFonts from 'pdfmake/build/vfs_fonts';
// pdfMake.vfs = pdfFonts.pdfMake.vfs;

require('datatables.net-bs4');
require('./farsi-numbers');
require('./persian');
require('datatables.net-buttons-bs4');
require('datatables.net-buttons/js/buttons.flash.js');
require('datatables.net-buttons/js/buttons.html5.js');
require('datatables.net-buttons/js/buttons.print.js');
require('datatables.net-responsive-bs4');
require('datatables.net-select-bs4');

$(document).ready(function () {
  const postsDT = $('#postsDataTable').DataTable({
    buttons: [
      {
        extend: 'print',
        text:
          '<div class="d-inline-block text-center mr-1" style="width: 20px;"><i class="fas fa-print text-info"></i></div>چاپ',
        className: 'dropdown-item text-muted font-size--08 font-weight--300',
        customize: function (win) {
          $(win.document.body).css('direction', 'rtl');
        },
      },
      // {
      //   extend: 'pdf',
      //   text:
      //     '<div class="d-inline-block text-center mr-1" style="width: 20px;"><i class="far fa-file-pdf text-danger"></i></div>پی دی اف',
      //   className: 'dropdown-item text-muted font-size--08 font-weight--300',
      //   customize: function (doc) {
      //     doc.defaultStyle.font = 'sans-serif';
      //   },
      // },
      {
        extend: 'excel',
        text:
          '<div class="d-inline-block text-center mr-1" style="width: 20px;"><i class="far fa-file-excel text-success"></i></div>اکسل',
        className: 'dropdown-item text-muted font-size--08 font-weight--300',
      },
      {
        extend: 'csv',
        text:
          '<div class="d-inline-block text-center mr-1" style="width: 20px;"><i class="fas fa-file-csv text-warning"></i></div>سی اس وی',
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
      { type: 'pstring', targets: 2 },
      { type: 'farsi-numbers', targets: 9 },
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

    infoCallback: function (settings, start, end, max, total, pre) {
      if (total == 0) return 'رکوردی پیدا نشد.';
      return (
        'نمایش ' +
        start.toString().toPersianDigits() +
        ' تا ' +
        end.toString().toPersianDigits() +
        ' از ' +
        total.toString().toPersianDigits() +
        ' ردیف'
      );
    },

    language: {
      sEmptyTable: 'هیچ داده‌ای در جدول وجود ندارد',
      sInfo: 'نمایش _START_ تا _END_ از _TOTAL_ ردیف',
      sInfoEmpty: 'نمایش 0 تا 0 از 0 ردیف',
      sInfoFiltered: '(فیلتر شده از _MAX_ ردیف)',
      sInfoPostFix: '',
      sInfoThousands: ',',
      sLengthMenu: 'نمایش _MENU_ ردیف',
      sLoadingRecords: 'در حال بارگزاری...',
      sProcessing: 'در حال پردازش...',
      sSearch: 'جستجو:',
      sZeroRecords: 'رکوردی با این مشخصات پیدا نشد',
      oPaginate: {
        sFirst: '<<',
        sLast: '>>',
        sNext: '>',
        sPrevious: '<',
      },
      oAria: {
        sSortAscending: ': فعال سازی نمایش به صورت صعودی',
        sSortDescending: ': فعال سازی نمایش به صورت نزولی',
      },
      select: {
        rows: {
          _: ' %d ردیف انتخاب شده',
          0: '',
        },
      },
    },
  });

  postsDT.buttons().container().appendTo($('#postsDtActionMenu'));

  // activate select all posts checkbox functionality
  activateDtSelectAll('dtSelectAllCheckbox', 'dtSelectAllPosts', postsDT);

  // enabling delete btn after selecting a records
  postsDT.on('select', function (e, dt, type, indexes) {
    $('#deleteSelectedBtn').removeClass('disabled');
    const count = postsDT.rows({ selected: true }).count();
    // convert selected items number to Persian
    $('.select-info').html(
      `<span class="ml-2"> ( ${count
        .toString()
        .toPersianDigits()} ردیف انتخاب شده )</span>`
    );
  });

  // disabling delete btn after deselecting all records
  postsDT.on('deselect', function (e, dt, type, indexes) {
    const count = postsDT.rows({ selected: true }).count();

    if (count == 0) {
      $('#deleteSelectedBtn').addClass('disabled');
      // clear select info when selected items equals to 0
      $('.select-info').html('');
    } else {
      // convert selected items number to Persian
      $('.select-info').html(
        `<span class="ml-2"> ( ${count
          .toString()
          .toPersianDigits()} ردیف انتخاب شده )</span>`
      );
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

  // converting page numbers to Persian
  const pageNumberToPersian = () => {
    $('.dataTables_paginate > .pagination > li').each(function () {
      const elem = $(this).find('.page-link');
      const linkVal = elem.text();
      if (
        linkVal !== 'نخستین' ||
        linkVal !== 'قبلی' ||
        linkVal !== 'بعدی' ||
        linkVal !== 'آخرین'
      ) {
        elem.text(linkVal.toPersianDigits());
      }
    });

    $('.dataTables_length > label > select > option').each(function () {
      const elem = $(this);
      const linkVal = elem.text();
      elem.text(linkVal.toPersianDigits());
    });
  };

  // converting page numbers to Persian after first loading
  pageNumberToPersian();

  // converting page numbers to Persian after every click on page number btn
  postsDT.on('draw.dt', function () {
    pageNumberToPersian();

    // convert selected items number to Persian after table redrew
    const count = postsDT.rows({ selected: true }).count();
    if (count == 0) {
      $('span.select-item').text('');
    } else {
      $('.select-info').html(
        `<span class="ml-2"> ( ${count
          .toString()
          .toPersianDigits()} ردیف انتخاب شده )</span>`
      );
    }
  });
});
