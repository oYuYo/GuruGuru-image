chrome.contextMenus.create({
  id: "parent",
  title: "GuruGuru image",
  contexts: ["image"]
});
chrome.contextMenus.onClicked.addListener(function(info, tab) {
  if (info.menuItemId == "parent") {
    chrome.tabs.query( {active: true, lastFocusedWindow: true}, function (tabs) {
      sessionStorage.setItem('6b9ffec64667b065b7ec02825794f3c2', info.srcUrl);
      window.open("./newtab.html", "GuruGuru image")
    });
  }
});
