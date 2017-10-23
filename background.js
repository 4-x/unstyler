chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript({
    code: 'var stylesheets = document.querySelectorAll("link");stylesheets.forEach(function(sheet){sheet.parentNode.removeChild(sheet)});var inlineStylesheets = document.querySelectorAll("style");inlineStylesheets.forEach(function(sheet){sheet.parentNode.removeChild(sheet)});'
  });
});
