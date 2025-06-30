import db_connector/db_mysql
import "../utils/reader"

## reading config
# reading config it will change if user really
let readConfig = readStr("./data/config.json")
echo readConfig

let host: string = "localhost" 
let user: string = "root"
let password: string = ""
let dbname: string = ""

let db* = open(host, user, password, dbname)
db.close()