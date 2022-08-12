const puppeteer = require("puppeteer");

//Export page as PDF
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://news.ycombinator.com", {
    waitUntil: "networkidle2",
  });
  await page.pdf({ path: "./pdfs/Page.pdf", format: "a4" });

  await browser.close();
})();
