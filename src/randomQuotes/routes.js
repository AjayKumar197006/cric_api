const {Router}=require("express")
const controller=require("./controllers.js")

const router=Router()

router.get("/",controller.getRandomQuote)
router.post("/",controller.postRandomQuote)
router.put("/:id",controller.updateRandomQuote)
router.delete("/:id",controller.deleteRandomQuote)


module.exports=router