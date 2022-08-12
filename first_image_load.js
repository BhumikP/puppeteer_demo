const puppeteer = require("puppeteer");

//Get first website with Image loaded  in it
(async () => {
  const browser = await puppeteer.launch({ headless: false, slowMo: 200 });
  const page = await browser.newPage();
  let currentURL;
  page
    .waitForXPath("//img")
    .then(() => console.log("First URL with image: " + currentURL));
  for (currentURL of [
    "https://example.com",
    "https://google.com",
    "https://bbc.com",
  ]) {
    await page.goto(currentURL);
  }
  await browser.close();
})();
