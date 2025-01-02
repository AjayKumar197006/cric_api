const {Router}=require("express")
const controller=require("./controllers.js")

const router=Router()

router.get("/",controller.getStatsPage)
router.post("/",controller.postStatsPage)
router.put("/:id",controller.updateStatsPage)
router.delete("/:id",controller.deleteStatsPage)

module.exports=router