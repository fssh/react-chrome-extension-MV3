/**
 * your code here
 */

chrome.action.onClicked.addListener((tab) => {
  // console.log('onClicked')
  chrome.tabs.create({
    url: chrome.runtime.getURL('popup.html'),
  });
});

export { }; // stops ts error that the file isn't a module
