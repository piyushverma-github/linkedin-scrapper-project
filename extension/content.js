(() => {
  function getText(selector) {
    const el = document.querySelector(selector);
    return el ? el.innerText.trim() : "";
  }

  const profile = {
    name: getText(".text-heading-xlarge"),
    url: window.location.href,
    about: getText(".pv-shared-text-with-see-more"),
    bio: getText(".text-body-medium"),
    location: getText(".text-body-small.inline.t-black--light.break-words"),
    followerCount: parseInt(getText(".t-bold").replace(/\D/g, "")) || 0,
    connectionCount: parseInt(getText(".t-bold").replace(/\D/g, "")) || 0,
  };

  chrome.runtime.sendMessage({ scraped: profile });
})();
