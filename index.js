const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Read the local HTML file
    const htmlContent = fs.readFileSync(path.resolve(__dirname, './templates/invoice.html'), 'utf-8');

    // Set the HTML content of the page
    await page.setContent(htmlContent);

    // Generate the PDF
    await page.pdf({ path: 'example.pdf', format: 'A4' });

    // Close the browser
    await browser.close();
})();
