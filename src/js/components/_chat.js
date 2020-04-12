import PerfectScrollbar from 'perfect-scrollbar';

// Chats page after its tab has been shown
$('#chats-tab').on('shown.bs.tab', function(e) {
  // calculate height of chats wrapper
  calculateChatListHeight();
});

// Chat settings after its tab has been shown
$('#settings-tab').on('shown.bs.tab', function(e) {
  // calculate height of chats settings wrapper
  calculateChatSettingsHeight();

  // Perfect-scrollbar for chat settings
  const chatSettingsPs = new PerfectScrollbar('#settingsContent');
});

// Hide chat panel
document.querySelector('#hideChatPanel').addEventListener('click', () => {
  document.querySelector('#chatPanel').classList.remove('show-sidebar');
});

// Show chat panel
document.querySelector('#showChatPanel').addEventListener('click', () => {
  document.querySelector('#chatPanel').classList.add('show-sidebar');
});

// Go to chat details page from chats by clicking on an item in chats page
document.querySelectorAll('.omd-chat__discussion-item').forEach(chatItem => {
  chatItem.addEventListener('click', () => {
    document
      .querySelector('#chatsPage')
      .classList.add('omd-chat__chats-page--slideout');
    document
      .querySelector('#chatDetails')
      .classList.add('omd-chat__chat-details--slidein');
  });
});

// Back to chats page from chat details page
document.querySelector('#backToChats').addEventListener('click', () => {
  document
    .querySelector('#chatsPage')
    .classList.remove('omd-chat__chats-page--slideout');
  document
    .querySelector('#chatDetails')
    .classList.remove('omd-chat__chat-details--slidein');
});

// Search details page - open search assigning animation class
document.querySelector('#chatSearchBtn').addEventListener('click', e => {
  document
    .querySelector('#chatSearchContainer')
    .classList.toggle('omd-chat__chat-search-container--slidedown');
});

// Open user info
document.querySelector('#chatUserInfoBtn').addEventListener('click', e => {
  document
    .querySelector('#chatDetails')
    .classList.add('omd-chat__chat-details--slideout');

  document
    .querySelector('#chatUserInfo')
    .classList.add('omd-chat__chat-user-info--slidein');
});

// Back to chat details from user info page
document.querySelector('#backToChatDetails').addEventListener('click', e => {
  document
    .querySelector('#chatDetails')
    .classList.remove('omd-chat__chat-details--slideout');

  document
    .querySelector('#chatUserInfo')
    .classList.remove('omd-chat__chat-user-info--slidein');
});

// calculate height of chats wrapper
const calculateChatListHeight = () => {
  // select chats window elements
  const container = document.querySelector('#chatPanel');
  const chatsHeader = document.querySelector('#chatsHeader');
  const chatsContent = document.querySelector('#chatList');
  const chatsFooter = document.querySelector('#pills-tab');

  // calculate height of chats window elements
  const containerHeight = container.offsetHeight;
  const headerHeight = chatsHeader.offsetHeight;
  const footerHeight = chatsFooter.offsetHeight;
  const contentHeight = containerHeight - (headerHeight + footerHeight);

  // assign content height to element style
  chatsContent.style.height = contentHeight + 'px';
};

// calculate height of chats settings wrapper
const calculateChatSettingsHeight = () => {
  // select chats window elements
  const container = document.querySelector('#chatPanel');
  const settingsHeader = document.querySelector('#settingsHeader');
  const settingsContent = document.querySelector('#settingsContent');
  const settingsFooter = document.querySelector('#pills-tab');

  // calculate height of settings window elements
  const containerHeight = container.offsetHeight;
  const headerHeight = settingsHeader.offsetHeight;
  const footerHeight = settingsFooter.offsetHeight;
  const contentHeight = containerHeight - (headerHeight + footerHeight);

  // assign content height to element style
  settingsContent.style.height = contentHeight + 'px';
};

// calculate height of chat content wrapper
export const calculateChatContentHeight = () => {
  // select chat window elements
  const container = document.querySelector('#chatPanel');
  const chatHeader = document.querySelector('#chatHeader');
  const chatContent = document.querySelector('#chatContent');
  const chatFooter = document.querySelector('#chatFooter');

  // calculate height of chat window elements
  const containerHeight = container.offsetHeight;
  const headerHeight = chatHeader.offsetHeight;
  const footerHeight = chatFooter.offsetHeight;
  const contentHeight = containerHeight - (headerHeight + footerHeight);

  // assign content height to element style
  chatContent.style.height = contentHeight + 'px';
};

// calculate height of user info content wrapper
const calculateUserInfoContentHeight = () => {
  // select user info window elements
  const container = document.querySelector('#chatPanel');
  const chatHeader = document.querySelector('#userInfoHeader');
  const chatContent = document.querySelector('#userInfoContent');

  // calculate height of user info window elements
  const containerHeight = container.offsetHeight;
  const headerHeight = chatHeader.offsetHeight;
  const contentHeight = containerHeight - headerHeight;

  // assign content height to element style
  chatContent.style.height = contentHeight + 'px';
};

// setting chat content wrapper height
document.addEventListener('DOMContentLoaded', function(event) {
  // calculate height of chats wrapper
  calculateChatListHeight();
  // calculate height of chat content wrapper
  calculateChatContentHeight();
  // calculate height of user info content wrapper
  calculateUserInfoContentHeight();

  // Perfect-scrollbar for chat List
  const chatListPs = new PerfectScrollbar('#chatList');
  // Perfect-scrollbar for chat
  const chatPs = new PerfectScrollbar('#chatContent');
  // Perfect-scrollbar for user info
  const userInfoPs = new PerfectScrollbar('#userInfoContent');
});

// setting chat content wrapper height on window resize
window.addEventListener('resize', e => {
  // calculate height of chats wrapper
  calculateChatListHeight();
  // calculate height of chats settings wrapper
  calculateChatSettingsHeight();
  // calculate height of chat content wrapper
  calculateChatContentHeight();
  // calculate height of user info content wrapper
  calculateUserInfoContentHeight();
});
