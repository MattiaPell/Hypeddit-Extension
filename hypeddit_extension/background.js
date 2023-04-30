const hypeddit = 'https://hypeddit.com/'

chrome.action.setIcon({ path: 'icon.png' })

chrome.action.onClicked.addListener(async (tab) => {
  if (tab.url.startsWith(hypeddit)) {
    console.log('Hypeddit tab detected')
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ['content.js']
    })
  }
});