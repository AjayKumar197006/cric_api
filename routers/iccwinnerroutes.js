const {Router}=require("express")
const odiwinners=require("../controllers/odiwcwinners")

const app=Router()

app.get("/getOdiWorldcupWinners",odiwcwinners)
app.get("/getT20WorldcupWinners",t20wcwinners)
app.get("/getChampionTrophyWinners",championtrophycwinners)
app.get("/getWtcWinners",wtcwinners)
app.get("/getUnder19wcWinners",under19wcwinners)
app.get("/getAsiacupWinners",asiacupwinners)
app.get("/getAshesWinners",asheswinners)
app.get("/getBgtWinners",bgtwinners)
app.get("/getFrankWorellWinners",frankworellwinners)
app.get("/getTransTasmanWinners",transtasmanwinners)
app.get("/getChappellHadleeWinners",chappellhadleewinners)
app.get("/getChappellHadleeWinners",chappellhadleewinners)
app.get("/getChappellHadleeWinners",chappellhadleewinners)
app.get("/getChappellHadleeWinners",chappellhadleewinners)
app.get("/getChappellHadleeWinners",chappellhadleewinners)
app.get("/getChappellHadleeWinners",chappellhadleewinners)
app.get("/getChappellHadleeWinners",chappellhadleewinners)
app.get("/getChappellHadleeWinners",chappellhadleewinners)
app.get("/getChappellHadleeWinners",chappellhadleewinners)
app.get("/getChappellHadleeWinners",chappellhadleewinners)
app.get("/getChappellHadleeWinners",chappellhadleewinners)
app.get("/getChappellHadleeWinners",chappellhadleewinners)


module.exports=app