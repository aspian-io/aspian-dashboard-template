import PerfectScrollbar from 'perfect-scrollbar';

$(document).ready(function () {
  // Perfect-scrollbar for Media Object List widget
  const timelineWidget = new PerfectScrollbar('#timeLineWidget', {
    suppressScrollX: true,
  });
});
