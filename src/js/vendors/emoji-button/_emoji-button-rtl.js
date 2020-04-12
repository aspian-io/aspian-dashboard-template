import EmojiButton from '@joeattardi/emoji-button';

window.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('#emoji-button');
  const rootElem = document.querySelector('#chatFooter');
  const picker = new EmojiButton({
    position: 'bottom-end',
    rootElement: rootElem,
    autoHide: false,
    showPreview: false,
    showSearch: false,
    i18n: {
      categories: {
        recents: 'شکلک های اخیر',
        smileys: 'لبخند و احساسی',
        people: 'مردم و بدن',
        animals: 'حیوانات و طبیعت',
        food: 'غذا و نوشیدنی',
        activities: 'فعالیت ها',
        travel: 'مسافرت و مکان ها',
        objects: 'اشیا',
        symbols: 'علائم',
        flags: 'پرچم ها',
      },
    },
  });

  picker.on('emoji', (emoji) => {
    document.querySelector('#messageTextArea').value += emoji;
  });

  button.addEventListener('click', () => {
    picker.togglePicker(rootElem);
  });
});
