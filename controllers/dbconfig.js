const { Client } = require('pg');
require("dotenv").config()


const client = new Client({
  user: process.env.dbuser,
  host: process.env.host,
  database: process.env.database,
  password:process.env.password,
  port: process.env.port,
  ssl: {
    reject_unauthorized: false
  }
  
})
console.log(process.env.dbuser | process.env.host | process.env.database | process.env.password | process.env.port  )

function connect()
{
    client.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
      });

}


module.exports={connect}