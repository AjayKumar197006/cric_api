const {Router} =require("express")
const controller=require("./controllers")


const router=Router()

router.get("/",controller.getTopBannerData)
router.post("/",controller.addTopBannerData)
router.put("/:id",controller.updateBannerData)
router.delete("/:id",controller.deleteBannerData)


module.exports=router