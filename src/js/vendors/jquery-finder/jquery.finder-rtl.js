/**
 * jQuery Finder Plugin
 * @author Danny McGee
 * @version 1.0
 * github.com/dannymcgee
 *
 * Copyright 2018 Danny McGee
 * Released under the MIT License
 * https://opensource.org/licenses/MIT
 */

import '../../base/_rtl';

$(document).ready(function () {
  $(finder.activator).click(function () {
    finder.activate();
  });

  $(document).mousedown(function (event) {
    if (event.which === 1) {
      switch (
        $(event.target).attr('id') ||
        $(event.target).parents().attr('id')
      ) {
        case 'finderClose':
          finder.closeFinder();
          break;

        case 'finderPrev':
          finder.prevResult();
          break;

        case 'finderNext':
          finder.nextResult();
          break;

        default:
          return true;
      }
    }
  });
});

const finder = {
  activator: '[data-finder-activator]',

  content: '[data-finder-content]',

  wrapper: '[data-finder-wrapper]',

  scrollOffset: () => $(finder.wrapper).data('finderScrollOffset'),

  activate: () => {
    if (!$('#finder').length) {
      finder.createFinder();
    }
    setTimeout(function () {
      $('#finder').addClass('active');
      $('#finderInput').focus();
      if ($('#finderInput').val()) {
        finder.findTerm($('#finderInput').val());
      }
      $('#finderInput').on('input', function () {
        finder.findTerm($(this).val());
      });
    }, 50);
  },

  createFinder: () => {
    const finderElem = $('<div />')
      .attr({
        id: 'finder',
        class: 'omd-chat__search-wrapper input-group',
      })
      .prependTo(finder.wrapper);

    const input = $('<input />')
      .attr({
        id: 'finderInput',
        type: 'text',
        placeholder: 'جستجو در گفتگو جاری ...',
        class: 'omd-chat__search-input form-control border-0 shadow-none',
      })
      .appendTo(finderElem);

    const inputGroupAppend = $('<div />')
      .attr({
        class: 'input-group-append',
      })
      .appendTo(finderElem);

    const prev = $('<button />')
      .attr({
        id: 'finderPrev',
        class:
          'omd-chat__search-btn btn border-0 rounded-0 shadow-none text-light-gray',
      })
      .appendTo(inputGroupAppend);

    const prevIcon = $('<i />')
      .attr({
        class: 'omd-chat__search-icon fas fa-angle-up font-size--08',
      })
      .appendTo(prev);

    const next = $('<button />')
      .attr({
        id: 'finderNext',
        class:
          'omd-chat__search-btn btn border-0 rounded-0 shadow-none text-light-gray',
      })
      .appendTo(inputGroupAppend);

    const nextIcon = $('<i />')
      .attr({
        class: 'omd-chat__search-icon fas fa-angle-down font-size--08',
      })
      .appendTo(next);

    const close = $('<button />')
      .attr({
        id: 'finderClose',
        class: 'omd-chat__search-btn btn border-0 shadow-none text-light-gray',
      })
      .appendTo(inputGroupAppend);

    const closeIcon = $('<i />')
      .attr({
        class: 'omd-chat__search-icon fas fa-times font-size--08',
      })
      .appendTo(close);
  },

  closeFinder: () => {
    $('#finderInput').val('');
    $('#finderCount').remove();
    $('#finder').removeClass('active');
    $(finder.content).unhighlight();
  },

  resultsCount: 0,

  currentResult: 0,

  findTerm: (term) => {
    // highlight results
    $(finder.content).unhighlight();
    $(finder.content).highlight(term);

    // count results
    finder.resultsCount = $('.highlight').length;

    if (finder.resultsCount) {
      // there are results, scroll to first one
      finder.currentResult = 1;
      finder.scrollToCurrent();
    } else {
      // no results
      finder.currentResult = 0;
    }

    // term not found
    if (!finder.resultsCount && term) {
      $('#finderInput').addClass('not-found');
    } else {
      $('#finderInput').removeClass('not-found');
    }

    finder.updateCurrent();
  },

  scrollToCurrent: () => {
    let scrollingElement;

    let i = finder.currentResult - 1;
    $('.highlight').removeClass('active');
    $(`.highlight:eq(${i})`).addClass('active');

    let offsetTop = -100;
    if (finder.scrollOffset() !== null) {
      offsetTop = finder.scrollOffset() * -1;
    }

    $(finder.wrapper).scrollTo('.highlight.active', {
      offset: {
        left: 0,
        top: offsetTop,
      },
    });
  },

  prevResult: () => {
    if (finder.resultsCount) {
      if (finder.currentResult > 1) {
        finder.currentResult--;
      } else {
        finder.currentResult = finder.resultsCount;
      }
      finder.scrollToCurrent();
    }

    finder.updateCurrent();
  },

  nextResult: () => {
    if (finder.resultsCount) {
      if (finder.currentResult < finder.resultsCount) {
        finder.currentResult++;
      } else {
        finder.currentResult = 1;
      }
      finder.scrollToCurrent();
    }

    finder.updateCurrent();
  },

  updateCurrent: () => {
    if ($('#finderInput').val()) {
      if (!$('#finderCount').length) {
        const countElem = $('<span />')
          .attr({
            id: 'finderCount',
            class: 'omd-chat__finder-count text-light-gray font-size--08',
          })
          .insertAfter('#finderInput');
      }
      setTimeout(function () {
        $('#finderCount').text(
          finder.currentResult.toString().toPersianDigits() +
            ' از ' +
            finder.resultsCount.toString().toPersianDigits()
        );
      }, 50);
    } else {
      $('#finderCount').remove();
    }
  },
};
