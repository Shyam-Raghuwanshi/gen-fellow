import { Hono } from 'hono'
import { handle } from 'hono/aws-lambda'
import { scrapeTextFromUrls } from "@gen-fellow/rust-lib"
const app = new Hono()

app.get('/', async (c) => {
    const urls = ["https://www.google.com"]
    const text = scrapeTextFromUrls(urls)
    return c.json({ text })
})

export const handler = handle(app)