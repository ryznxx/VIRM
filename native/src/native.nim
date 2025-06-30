import asynchttpserver, asyncdispatch
import handlers
include "./config/config"


# should be native http handler if using node is danger
let server = newAsyncHttpServer()

waitFor server.serve(Port(5000), handler)
