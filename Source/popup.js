//Add Event Listeners to Button Click
document.addEventListener("DOMContentLoaded", function () {
    chrome.notifications.create(
          {
            type:'basic',
            iconUrl:chrome.runtime.getURL("icon128.png"),
            title : "Copied Quote",
            message: "You can also copy a quote by using the keyboard shortcut Ctrl+Shift+1 (Command+Shift+1 for Mac)",
            isClickable: true
            
          },
          function() {
            console.log(chrome.runtime.lastError);
          }
        );
  chrome.runtime.sendMessage({greeting: "hello"}, function(response) {
  console.log(response.farewell);
  });
    //copy();
    window.close();
});