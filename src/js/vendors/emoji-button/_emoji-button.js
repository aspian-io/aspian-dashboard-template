import EmojiButton from '@joeattardi/emoji-button';

window.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('#emoji-button');
  const rootElem = document.querySelector('#chatFooter');
  const picker = new EmojiButton({
    position: 'bottom-end',
    rootElement: rootElem,
    autoHide: false,
    showPreview: false,
    showSearch: false
  });

  picker.on('emoji', emoji => {
    document.querySelector('#messageTextArea').value += emoji;
  });

  button.addEventListener('click', () => {
    picker.togglePicker(rootElem);
  });
});
