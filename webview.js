"use strict";

module.exports = Franz => {
  const getMessages = function getMessages() {
    let count = 0;

    count = document.getElementsByClassName('todo-content').length;

    if (isNaN(count)) {
      count = 0;
    }

    Franz.setBadge(count);
  };

  Franz.loop(getMessages);
};