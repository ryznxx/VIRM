import std/cmdline,sequtils
from std/strutils import join

var args: seq[string] = @[]
for i in 1..paramCount():
  args.add(paramStr(i))

let rawText = args.join(" ")

proc analyzer(text: string): void =
  echo text

analyzer(rawText)
