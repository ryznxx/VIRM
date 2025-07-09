import std/cmdline
import std/strutils
import std/sequtils

let sqlKeywords = @[ 
  "SELECT", "INSERT", "UPDATE", "DELETE",
  "CREATE", "DROP", "ALTER", "TRUNCATE",
  "FROM", "WHERE", "INTO", "VALUES", "SET",
  "TABLE", "DATABASE", "JOIN", "ON", "GROUP", "ORDER", "BY", "HAVING", "LIMIT"
]

proc isSqlKeyword(word: string): bool =
  return word.toUpperAscii() in sqlKeywords

proc analyzeSQL(text: string): bool =
  let cleaned = text.strip()
  if cleaned.len == 0:
    echo "[Error] The provided query is empty."
    return false

  let tokens = cleaned.split({' ', '\n', '\t'})
  let upperTokens = tokens.mapIt(it.toUpperAscii())

  var score = 0

  if isSqlKeyword(upperTokens[0]):
    score += 1

  for word in upperTokens:
    if isSqlKeyword(word):
      score += 1

  if cleaned.endsWith(";"):
    score += 1

  echo "[Info] Parsed tokens: ", upperTokens
  echo "[Info] SQL validation score: ", score

  if score >= 3:
    echo "[Success] The input appears to be a valid SQL statement."
    echo "[Response] True"
    return true
  else:
    echo "[Warning] The input does not resemble a valid SQL query."
    return false

var args: seq[string] = @[]
for i in 1..paramCount():
  args.add(paramStr(i))

let rawText = args.join(" ")
discard analyzeSQL(rawText)
