import PerfectScrollbar from 'perfect-scrollbar';

// Recalculate topbar width based on new viewport size
export function addTobarRecalcWidth() {
  $('.omd-topbar').addClass('omd-topbar--recalc-width');
}

export function removeTobarRecalcWidth() {
  $('.omd-topbar').removeClass('omd-topbar--recalc-width');
}

// Perfect-scrollbar for topbar notifications dropdown
const notificationPs = new PerfectScrollbar('#topbarNotificationWrapper');

// Perfect-scrollbar for topbar message dropdown
const messagePs = new PerfectScrollbar('#topbarMessageWrapper');
