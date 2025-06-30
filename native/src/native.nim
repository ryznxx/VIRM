import asynchttpserver, asyncdispatch
import handlers
include "./config/config"

let server = newAsyncHttpServer()

waitFor server.serve(Port(5000), handler)
