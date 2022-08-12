//Puppeteer focuses on Chromium; its value proposition is richer functionality and higher reliability.

const puppeteer = require("puppeteer");

//To take screenshot of website
(async () => {
  //headless=false =>you will see instance of browser to open
  //By default headless is always true
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 0, // To slow down operation by specified amount on milliseconds.
  });
  const page = await browser.newPage();
  //Notice: set viewPort before going to website
  await page.setViewport({
    width: 1900,
    height: 1080,
  });
  await page.goto("https://www.swiggy.com/");
  await page.screenshot({ path: "./images/swiggy.png" });

  await browser.close();
})();
