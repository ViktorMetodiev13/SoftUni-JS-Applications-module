const { chromium } = require('playwright-chromium');
const { expect } = require('chai');


let browser, page; // Declare reusable variables

describe('E2E tests', async function () {
    before(async () => { browser = await chromium.launch()});
    after(async () => { await browser.close(); });
    beforeEach(async () => { page = await browser.newPage(); });
    afterEach(async () => { await page.close(); });

    it('loads article titles', async () => {
        await page.goto('http://localhost3000');

        await page.waitForSelector('.accordion');

        const content = await page.textContent('#main');

        expect(content).to.contain('Scalable Vector Graphics');
        expect(content).to.contain('Open Standard');
        expect(content).to.contain('Unix');
        expect(content).to.contain('ALGOL');
    })
});


