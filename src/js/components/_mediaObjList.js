import PerfectScrollbar from 'perfect-scrollbar';

$(document).ready(function () {
  // Perfect-scrollbar for Media Object List widget
  const mediaObjList = new PerfectScrollbar('#mediaObjListWidget', {
    suppressScrollX: true,
  });
});
