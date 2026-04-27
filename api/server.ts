import { createServer } from 'http'
import { handler } from '../dist/server/server.mjs'

const server = createServer(handler)

export default handler

