import asynchttpserver, asyncdispatch
import std/json
# import "../config/config"

proc mainroute*(req: Request) {.async.}  =
   let headers = {"Content-type": "Application/json"}
   var hisName = "John"
   var j = %*[
      { "name": hisName, "age": 30 },
   ]

   echo j

   await req.respond(Http200, $j, headers.newHttpHeaders())
