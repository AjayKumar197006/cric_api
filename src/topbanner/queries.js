const getTopBannerQuery="SELECT * FROM futurematches"
const addTopBannerQuery="INSERT INTO futurematches (match_type,match_date,match_time) values($1,$2,$3)"
const updateBannerQuery="UPDATE futurematches SET match_type=$2,match_date=$3,match_time=$4 WHERE id=$1"
const deleteBannerQuery="DELETE FROM futurematches where id=$1"

module.exports={getTopBannerQuery,addTopBannerQuery,updateBannerQuery,deleteBannerQuery}