import { getPath, runViteDev } from './utils.js'

page.setDefaultTimeout(3000)
test('should see starter front page', async () => {
    const { kill, port } = await runViteDev(getPath('starter'))
    await page.goto(`http://localhost:${port}`)
    const result = await page.waitForSelector('h1')
    expect(result).toBeTruthy()
    kill()
})
