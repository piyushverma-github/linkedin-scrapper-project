chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.profiles) {
    let index = 0;

    function openNextProfile() {
      if (index < msg.profiles.length) {
        chrome.tabs.create({ url: msg.profiles[index] }, (tab) => {
          setTimeout(() => {
            chrome.scripting.executeScript({
              target: { tabId: tab.id },
              files: ["content.js"],
            });
          }, 4000); // wait for page load
        });
        index++;
      }
    }

    chrome.runtime.onMessage.addListener((profileData) => {
      if (profileData.scraped) {
        fetch("http://localhost:5000/api/profiles", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(profileData.scraped),
        }).then(() => {
          openNextProfile();
        });
      }
    });

    openNextProfile();
  }
});
