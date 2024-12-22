require("dotenv").config()
const Pool =require('pg').Pool


const pool = new Pool({
  user: process.env.dbuser,
  host: process.env.host,
  database: process.env.database,
  password:process.env.password,
  port: process.env.port,
  ssl: {
    reject_unauthorized: false
  }
  
})



module.exports=pool





