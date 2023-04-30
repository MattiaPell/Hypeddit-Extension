document.addEventListener("DOMContentLoaded", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      const currentUrl = tabs[0].url;
      if (currentUrl.includes("hypeddit.com")) {
        document.getElementById("hypeddit-button").style.display = "block";
        document.getElementById("default-message").style.display = "none";
      } else {
        document.getElementById("hypeddit-button").style.display = "none";
        document.getElementById("default-message").style.display = "block";
      }
    });

    document.getElementById("hypeddit-button").addEventListener("click", function () {
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: "downloadHypedditFile" });
      });
    });
  });
