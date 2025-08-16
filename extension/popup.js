document.getElementById("scrapeBtn").addEventListener("click", async () => {
  const linkedinProfiles = [
    "https://in.linkedin.com/in/piyush-verma-397825225/",
    "https://www.linkedin.com/in/sundarpichai/",
    "https://www.linkedin.com/in/jeffweiner08/",
    "https://www.linkedin.com/in/codewithimanshu/",
    "https://www.linkedin.com/in/navinreddy20/"
  ];

  chrome.runtime.sendMessage({ profiles: linkedinProfiles });
});
