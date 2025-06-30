import asynchttpserver, asyncdispatch
import routes/main

proc handler*(req: Request) {.async.} =
   let httpmethod = $req.reqMethod
   let path = req.url.path

   if httpmethod == "GET" and path == "/":
      await mainroute(req)

   if httpmethod == "GET" and path == "/a":
      let headers = {"Content-type": "text/plain; charset=utf-8"}
      await req.respond(Http200, "Hello World", headers.newHttpHeaders())


   else:
      req.headers["Content-Type"] = "text/plain"
      await req.respond(Http404, "404 NOT FOUND GOBLOK")
