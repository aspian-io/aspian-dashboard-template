var pd = require('persian-date/dist/persian-date.min.js');
window.persianDate = pd;
require('persian-datepicker/dist/js/persian-datepicker.js');
import { template } from './en-template';

$(document).ready(function () {
  let to, from;

  // to specified date
  to = $('.omd-subheader__range-to').persianDatepicker({
    inline: true,
    altField: '#dateRangeTo',
    altFormat: 'DD MMMM YYYY',
    initialValue: false,
    calendar: {
      persian: {
        locale: 'fa',
        showHint: true,
        leapYearMode: 'algorithmic',
      },
      gregorian: {
        locale: 'en',
        showHint: true,
      },
    },
    toolbox: {
      enabled: true,
      calendarSwitch: {
        enabled: false,
        format: 'MMMM',
      },
      todayButton: {
        enabled: true,
        text: {
          fa: 'امروز',
          en: 'Today',
        },
      },
      text: {
        btnToday: 'امروز',
      },
    },
    onSelect: function (unix) {
      to.touched = true;
      if (from && from.options && from.options.maxDate != unix) {
        var cachedValue = from.getState().selected.unixDate;
        from.options = { maxDate: unix };
        if (from.touched) {
          from.setDate(cachedValue);
        }
      }
    },
    navigator: {
      enabled: true,
      scroll: {
        enabled: false,
      },
      text: {
        btnNextText: '>',
        btnPrevText: '<',
      },
    },
  });

  // From specified date
  from = $('.omd-subheader__range-from').persianDatepicker({
    inline: true,
    altField: '#dateRangeFrom',
    altFormat: 'DD MMMM YYYY',
    initialValue: false,
    calendar: {
      persian: {
        locale: 'fa',
        showHint: true,
        leapYearMode: 'algorithmic',
      },
      gregorian: {
        locale: 'en',
        showHint: true,
      },
    },
    toolbox: {
      enabled: true,
      calendarSwitch: {
        enabled: false,
        format: 'MMMM',
      },
      todayButton: {
        enabled: true,
        text: {
          fa: 'امروز',
          en: 'Today',
        },
      },
      text: {
        btnToday: 'امروز',
      },
    },
    onSelect: function (unix) {
      from.touched = true;
      if (to && to.options && to.options.minDate != unix) {
        var cachedValue = to.getState().selected.unixDate;
        to.options = { minDate: unix };
        if (to.touched) {
          to.setDate(cachedValue);
        }
      }
    },
    navigator: {
      enabled: true,
      scroll: {
        enabled: false,
      },
      text: {
        btnNextText: '>',
        btnPrevText: '<',
      },
    },
  });
});
// $(document).ready(function () {
//   $('.example1').pDatepicker({
//     format: 'LLLL',
//     viewMode: 'day',
//     initialValue: true,
//     minDate: 1586457137580,
//     maxDate: 1587407537598,
//     autoClose: false,
//     position: 'auto',
//     altFormat: 'lll',
//     altField: '#altfieldExample',
//     onlyTimePicker: false,
//     onlySelectOnDate: false,
//     calendarType: 'persian',
//     inputDelay: 800,
//     observer: false,
//     calendar: {
//       persian: {
//         locale: 'fa',
//         showHint: true,
//         leapYearMode: 'algorithmic',
//       },
//       gregorian: {
//         locale: 'en',
//         showHint: true,
//       },
//     },
//     navigator: {
//       enabled: true,
//       scroll: {
//         enabled: true,
//       },
//       text: {
//         btnNextText: '<',
//         btnPrevText: '>',
//       },
//     },
//     toolbox: {
//       enabled: true,
//       calendarSwitch: {
//         enabled: true,
//         format: 'MMMM',
//       },
//       todayButton: {
//         enabled: true,
//         text: {
//           fa: 'امروز',
//           en: 'Today',
//         },
//       },
//       submitButton: {
//         enabled: true,
//         text: {
//           fa: 'تایید',
//           en: 'Submit',
//         },
//       },
//       text: {
//         btnToday: 'امروز',
//       },
//     },
//     timePicker: {
//       enabled: false,
//       step: 1,
//       hour: {
//         enabled: true,
//         step: null,
//       },
//       minute: {
//         enabled: true,
//         step: null,
//       },
//       second: {
//         enabled: true,
//         step: null,
//       },
//       meridian: {
//         enabled: true,
//       },
//     },
//     dayPicker: {
//       enabled: true,
//       titleFormat: 'YYYY MMMM',
//     },
//     monthPicker: {
//       enabled: true,
//       titleFormat: 'YYYY',
//     },
//     yearPicker: {
//       enabled: true,
//       titleFormat: 'YYYY',
//     },
//   });
// });
