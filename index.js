const puppeteer = require('puppeteer');

async function start(phone) {
    const browser = await puppeteer.launch(
        {
            headless: false,
            args: [`--window-size=500,600`]
        });
    const page = await browser.newPage();
    await page.goto('http://192.168.1.50:3000');
    await page.setViewport({width: 500, height: 350})
    await page.waitFor(1000);
    //todo step 1
    await page.evaluate(() => {
        document.getElementsByTagName('input')[0].click();
    })
    page.keyboard.press('Tab');
    for(let i = 0; i < phone.length; i++){
        page.keyboard.press(phone[i])
    }
    await page.evaluate(() => {
        document.getElementsByTagName('button')[0].click();
    })

    await page.waitFor(500);

    //todo step 2
    await page.evaluate(() => {
        document.getElementsByTagName('input')[0].click();
    })
    page.keyboard.press('Tab');
    page.keyboard.press('1');
    page.keyboard.press('2');
    page.keyboard.press('3');
    await page.evaluate(() => {
        document.getElementsByTagName('button')[0].click();
    })
}

start("123");
start("1");
start("2");
