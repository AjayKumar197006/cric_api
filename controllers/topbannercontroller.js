const con=require("./dbconfig.js")


console.log("Hi")

con.connect()


function getTopBannerData()
{
    return new Promise(function(success,reject)
{
    con.query('select * from futurematches', function(err,res)
{
    if(err)
    {
        reject(err)
    }
    else
    {
        
        success(res)
    }

})

})
}
module.exports={getTopBannerData}