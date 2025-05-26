import {test} from '@playwright/test';

  test.describe('DeepStats Dashboard Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://deepstats.feedconstruct.com/am/dashboard');
    await page.waitForTimeout(5000);
  });

  test('Navigate to Players and select a player', async ({ page }) => {
    await page.click('.legauename-block');
    await page.waitForTimeout(5000);
    await page.getByText('Yerevan Amateurs Cup', { exact: true }).first().click();
    await page.getByText('Players', { exact: true }).first().click();
    await page.waitForTimeout(5000);
    await page.getByText('Kirill Koksharov', { exact: true }).click();
    await page.waitForTimeout(5000);
  });

  test('Navigate to Matches and select a match', async ({ page }) => {
    await page.click('.legauename-block');
    await page.waitForTimeout(5000);
    await page.getByText('Yerevan Amateurs Cup', { exact: true }).first().click();
    await page.getByText('Matches', { exact: true }).first().click();
    await page.waitForTimeout(5000);
    await page.getByText('WeKings', { exact: true }).first().click();
    await page.waitForTimeout(5000);
  });
});








/*test('Select season and observe data', async ({ page }) => {
  await page.goto('https://deepstats.feedconstruct.com/am/dashboard');
  await page.waitForTimeout(5000);
  await page.click('.legauename-block');
  await page.waitForTimeout(5000);
  await page.getByText('Yerevan Amateurs Cup', { exact: true }).first().click();
  await page.getByText('Players', { exact: true }).first().click();
  await page.waitForTimeout(5000);
  await page.getByText('Kirill Koksharov', { exact: true }).click();
  await page.waitForTimeout(5000);
  await page.getByText('vs WeKings', { exact: true }).first().click();
  await page.waitForTimeout(5000);
  await page.getByText('Referees', { exact: true }).first().click();
  await page.waitForTimeout(500);
});*/



/*test.beforeEach (async ({page}) => {
    await page.goto('http://localhost:4200/')
    await page.getByText('Forms').click()
    await page.getByText('Form Layouts').click()
})*/

/*test('Locator syntax rules', async({page}) => {

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

})*/


/*test('User facing locators', async ({page}) => {
    await page.getByRole('textbox',{name:"Email"}).first().click()
    await page.getByRole('button', {name:"Sign in"}).first().click()

    await page.getByLabel('Email').first().click()

    await page.getByPlaceholder('Jane Doe').click()
})*/

/*test('navigate to Players page', async ({ page }) => {
  await page.goto('https://deepstats.feedconstruct.com/am/dashboard');
  await page.waitForTimeout(5000);
  await page.getByText('Players', { exact: true }).first().click();

});*/




/*test('navigate to Players page', async ({ page }) => {
  await page.goto('https://deepstats-stage.feedconstruct.com/am/dashboard');
  // Click the "Players" button/link
  await page.getByText('Players', { exact: true }).first().click();

  // Wait for the URL to include 'players'
  await page.waitForTimeout(5000);
  await page.waitForURL(/players/);
});*/