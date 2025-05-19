import {test} from '@playwright/test';


test.beforeEach (async ({page}) => {
    await page.goto('http://localhost:4200/')
    await page.getByText('Forms').click()
    await page.getByText('Form Layouts').click()
})

test('Locator syntax rules', async({page}) => {

//by Tag name
await page.locator('input').first().click()

//by ID
page.locator('#inputEmial')

//by Class value
page.locator('.shape-rectangle')

//by attribute
page.locator('[placeholder="Email]')

//by Class value (full)
page.locator('["input-full-width size-medium status-basic shape-rectangle nb-transition"]')

//combine different selectors
page.locator('input[placeholder="Email"] [nbinput]')

})


test('User facing locators', async ({page}) => {
    await page.getByRole('textbox',{name:"Email"}).first().click()
    await page.getByRole('button', {name:"Sign in"}).first().click()

    await page.getByLabel('Email').first().click()

    await page.getByPlaceholder('Jane Doe').click()
})

test.beforeEach (async ({page}) => {
    await page.goto('https://deepstats.feedconstruct.com/ph/dashboard')
    await page.getByRole('button',{name:"Teams"}).first().click()
    
})
