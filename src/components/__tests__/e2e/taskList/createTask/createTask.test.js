import { describe, it, expect, beforeAll, afterAll, beforeEach, afterEach } from 'vitest'
import puppeteer from 'puppeteer'
import 'dotenv/config'

// pour organiser les tests avec vitest
// (beforeAll, beforeEach, afterAll, afterEach)
describe('Create Task Test', () => {
  let browser
  let page

  beforeEach(async () => {
    browser = await puppeteer.launch({ headless: false })
    page = await browser.newPage()
    await page.goto(process.env.WTF_URL)
  })
  /*
  afterEach(async () => {
    const date = new Date()

    const screenshotDir = path.join(__dirname, './screenshot')
    if (!fs.existsSync(screenshotDir)) {
      fs.mkdirSync(screenshotDir)
    }

    const testName = this.test.title.replace(/[^a-zA-Z0-9]/g, '_') // Remplace les caractères spéciaux
    const screenshotPath = path.join(screenshotDir, `${testName}_${Date.now()}.png`)

    await page.screenshot({ path: screenshotPath })
  })
*/
  afterAll(async () => {
    await new Promise((resolve) => setTimeout(resolve, 5000))
    if (browser) {
      await browser.close()
    }
  })

  it('should create a new task when form is submitted', async () => {
    await page.waitForSelector('[data-testid="task-input"]')
    await page.waitForSelector('[data-testid="submit-task"]')

    await page.type('[data-testid="task-input"]', 'New task')

    await page.click('[data-testid="submit-task"]')

    await page.waitForSelector('[data-testid="task"]:last-child')

    const taskLabel = await page.$eval(
      '[data-testid="task"]:last-child span',
      (el) => el.textContent
    )
    expect(taskLabel).toBe('New task')
  })

  it('should not create a new task when the form is empty', async () => {
    await page.waitForSelector('[data-testid="task-input"]')
    await page.waitForSelector('[data-testid="submit-task"]')

    const taskTooLong = 'This task name is definitely way too long'

    await page.type('[data-testid="task-input"]', taskTooLong)
    await page.click('[data-testid="submit-task"]')

    const tasksListSelector = '.tasks-list'
    const tasksCount = await page.evaluate((selector) => {
      return document.querySelectorAll(selector).length
    }, tasksListSelector)

    expect(tasksCount).toBe(0)
  })

  it('should not create a new task when the form greater than the maximum size of 20 characters', async () => {
    await page.waitForSelector('[data-testid="task-input"]')
    await page.waitForSelector('[data-testid="submit-task"]')

    const tasksListSelector = '.tasks-list'
    const tasksCount = await page.evaluate((selector) => {
      return document.querySelectorAll(selector).length
    }, tasksListSelector)

    expect(tasksCount).toBe(0)
  })
})
