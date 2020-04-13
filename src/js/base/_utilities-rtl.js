const moment = require('jalali-moment');

export const lang = 'fa';

$('html').attr('lang', lang);

// add rtl class to body's class list for rtl Bootstrap
document.querySelector('body').classList.add('rtl');

// Converting English digits to Persian
String.prototype.toPersianDigits = function () {
  var id = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
  return this.replace(/[0-9]/g, function (w) {
    return id[+w];
  });
};

// Converting Persian digits to English
String.prototype.toEnglishDigits = function () {
  var id = {
    '۰': '0',
    '۱': '1',
    '۲': '2',
    '۳': '3',
    '۴': '4',
    '۵': '5',
    '۶': '6',
    '۷': '7',
    '۸': '8',
    '۹': '9',
  };
  return this.replace(/[^0-9.]/g, function (w) {
    return id[w] || w;
  });
};

// Conver all badges digits to Persian in rtl mode
if ($('body').hasClass('rtl')) {
  $('.badge').each(function () {
    $(this).text($(this).text().toPersianDigits());
  });
}

// Get the current year for the copyright for rtl template
$('#year').text(
  moment().locale('fa').format('YYYY').toString().toPersianDigits()
);
