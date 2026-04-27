import server from '../dist/server/server.js'

// TanStack Start server is an H3 app that can be used as middleware
// This wraps it for Vercel serverless functions
let serverHandler = null

function getServerHandler() {
  if (!serverHandler) {
    // The server export is callable as a middleware handler
    serverHandler = server
  }
  return serverHandler
}

export default (req, res) => {
  const handler = getServerHandler()
  // Call the handler directly - it should handle Node.js req/res
  if (typeof handler === 'function') {
    return handler(req, res)
  } else if (handler && typeof handler.handler === 'function') {
    return handler.handler(req, res)
  } else {
    res.status(500).json({ error: 'Server handler not available' })
  }
}


