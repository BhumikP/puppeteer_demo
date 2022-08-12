const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({ headless: false });

  const page = await browser.newPage();

  await page.goto("https://www.tutorialspoint.com/about/about_careers.htm");

  // Two methods i know to grab data

  //---------------Method 1-----------------
  const grabData = await page.evaluate(() => {
    const title = document.querySelector(".heading");
    return title.innerHTML;
  });

  console.log("Text is: ", grabData);

  //---------------Method 2-----------------
  //   const f = await page.$(".heading");
  //   const text = await (await f.getProperty("textContent")).jsonValue();
  //   console.log("Text is: " + text);

  await browser.close();
})();
