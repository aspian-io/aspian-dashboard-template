import PerfectScrollbar from 'perfect-scrollbar';
import * as TopbarFn from './_topbar.js';
import * as SubheaderFn from './_subheader-common';

// Perfect-scrollbar for sidebar
const sidebarPs = new PerfectScrollbar('#sidebar_accordion');

// to minimize sidebar
const makeSidebarMinimized = () => {
  $('.l-container--sidebar')
    .addClass('l-container--sidebar-minimized')
    .data('minimized', true)
    .data('hover-allowed', true);
  TopbarFn.addTopbarRecalcWidth();
  SubheaderFn.addSubheaderRecalcWidth();
};

// reset sidebar size to its default
const resetMinimizedSidebar = () => {
  $('.l-container--sidebar')
    .removeClass('l-container--sidebar-minimized')
    .data('minimized', false)
    .data('hover-allowed', false);
  TopbarFn.removeTopbarRecalcWidth();
  SubheaderFn.removeSubheaderRecalcWidth();
};

// click event for non-collapse items in sidebar nav
$('.omd-sidebar__menu-link').click(function (e) {
  if ($(event.target).attr('data-toggle') !== 'collapse') {
    $('.omd-sidebar__submenu.collapse').collapse('hide');
    // reset sidebar not being minimized anymore
    resetMinimizedSidebar();
  }
});

// Sidebar Bootstrap accordion functionality
$('#sidebar_accordion').on('show.bs.collapse', function (e) {
  $(e.target)
    .closest('li')
    .find('.omd-sidebar__menu-arrow > i')
    .addClass('omd-sidebar__menu-arrow--expand');

  resetMinimizedSidebar();
});

$('#sidebar_accordion').on('hide.bs.collapse', function (e) {
  $(e.target)
    .closest('li')
    .find('.omd-sidebar__menu-arrow > i')
    .removeClass('omd-sidebar__menu-arrow--expand');
});

$('#sidebar_button').click(function (e) {
  if (
    $('.l-container--sidebar').data('minimized') === false ||
    $('.l-container--sidebar').data('minimized') === undefined
  ) {
    // minimizing sidebar
    makeSidebarMinimized();
  } else {
    // reset sidebar to its default size
    resetMinimizedSidebar();
  }
});

$('#sidebar_nav').on('mouseenter', function (e) {
  if ($('.l-container--sidebar').data('hover-allowed') === true) {
    $('.l-container--sidebar').removeClass('l-container--sidebar-minimized');
    TopbarFn.removeTopbarRecalcWidth();
    SubheaderFn.removeSubheaderRecalcWidth();
  }
});

$('#sidebar_nav').on('mouseleave', function (e) {
  if ($('.l-container--sidebar').data('hover-allowed') === true) {
    $('.l-container--sidebar').addClass('l-container--sidebar-minimized');
    TopbarFn.addTopbarRecalcWidth();
    SubheaderFn.addSubheaderRecalcWidth();
  }
});

$(document).ready(function () {
  const windowHeight = $(window).height();
  const windowWidth = $(window).width();

  // calculate sidebar nav height
  $('#sidebar_accordion').css('height', `${windowHeight - 100}px`);

  // making sidebar minimized for smaller screens
  if (windowWidth < 922) {
    makeSidebarMinimized();
  }
});

// tracking window resizing
$(window).resize(function () {
  const windowHeight = $(window).height();
  const windowWidth = $(window).width();

  // calculate sidebar nav height
  $('#sidebar_accordion').css('height', `${windowHeight - 100}px`);

  // making sidebar minimized for smaller screens on window resizing
  if (windowWidth < 922) {
    makeSidebarMinimized();
  } else {
    resetMinimizedSidebar();
  }
});
