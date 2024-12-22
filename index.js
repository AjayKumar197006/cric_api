const express=require("express")
const db=require("./db.js")
const cors=require("cors")
const Topbanner=require("./src/topbanner/routes")



const app=express()
app.use(express.json())
app.use(cors())

app.use("/TopBanner",Topbanner)












app.listen(8000,()=>{
    console.log("server started")
})



