//require('pdfmake');
require('datatables.net-bs4');
require('./farsi-numbers');
require('./persian');
//require('datatables.net-buttons-bs4');
//require('datatables.net-buttons/js/buttons.html5.js');
//require('datatables.net-buttons/js/buttons.print.js');
require('datatables.net-fixedheader-bs4');
require('datatables.net-responsive-bs4');
//require('datatables.net-rowgroup-bs4');
//require('datatables.net-scroller-bs4');
//require('datatables.net-searchpanes-bs4');
//require('datatables.net-select-bs4');

$(document).ready(function () {
  $('#sampleDataTable').DataTable({
    columnDefs: [
      { type: 'pstring', targets: 1 },
      { type: 'farsi-numbers', targets: [3, 4, 5] },
    ],
    //ordering: false,
    info: false,
    responsive: true,
    searching: false,
    lengthChange: false,
    pageLength: 5,
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
        sFirst: 'نخستین',
        sLast: 'آخرین',
        sNext: 'بعدی',
        sPrevious: 'قبلی',
      },
      oAria: {
        sSortAscending: ': فعال سازی نمایش به صورت صعودی',
        sSortDescending: ': فعال سازی نمایش به صورت نزولی',
      },
    },
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
  };

  // converting page numbers to Persian after first loading
  pageNumberToPersian();

  // converting page numbers to Persian after every click on page number btn
  $('#sampleDataTable').on('draw.dt', function () {
    pageNumberToPersian();
  });
});
