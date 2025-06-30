# Package

version       = "0.1.0"
author        = "ryznxx"
description   = "backend for VIRM"
license       = "MIT"
srcDir        = "src"
bin           = @["native"]


# Dependencies

requires "nim >= 2.2.2"

requires "jester >= 0.6.0"
requires "db_connector >= 0.1.0"