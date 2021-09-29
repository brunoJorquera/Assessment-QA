import { Builder, Capabilities, By } from "selenium-webdriver"

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://localhost:4000')
})

afterAll(async () => {
    await driver.quit()
})

test('I can start a game', async () => {

    let button = await (await driver).findElement(By.id('start-game'));
    await button.click();
    await driver.sleep(5000)
    
});

test('Should test if upper left square works by adding X', async () => {
    let cellZero = await driver.findElement(By.id('cell-0'))
    await cellZero.click()

    const myText = await cellZero.getText()

    expect(myText).toBe('X')

    await driver.sleep(1000)
})

test('Should test if upper right square works by adding X', async () => {
    let cellTwo = await driver.findElement(By.id('cell-2'))
    await cellTwo.click()

    const myText = await cellTwo.getText()

    expect(myText).toBe('X')

    await driver.sleep(1000)
})

test('Should test if lower right square works by adding X', async () => {
    let cellEight = await driver.findElement(By.id('cell-8'))
    await cellEight.click()

    const myText = await cellEight.getText()

    expect(myText).toBe('X')

    await driver.sleep(1000)
})

test('Should test if center square works by adding X', async () => {
    let cellFour = await driver.findElement(By.id('cell-4'))
    await cellFour.click()

    const myText = await cellFour.getText()

    expect(myText).toBe('X')

    await driver.sleep(4000)
})