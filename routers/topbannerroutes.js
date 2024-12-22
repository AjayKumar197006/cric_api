const {Router} =require("express")
const getTopBanner=require("../controllers/topbannercontroller")

const app=Router()

app.get("/getTopBanner",getTopBanner.getTopBannerData)


module.exports=app