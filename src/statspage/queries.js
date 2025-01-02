const getStatsPageQuery="SELECT * FROM statspage"
const postStatsPageQuery="INSERT INTO statspage (image_url,heading,post_url,categoryforstats) values($1,$2,$3,$4)"
const updateStataPageQuery="UPDATE statspage SET image_url=$2,heading=$3,post_url=$4,categoryforstats=$5 where statsid=$1"
const deleteStatsPageQuery ="DELETE FROM statspage where statsid=$1" 

module.exports={getStatsPageQuery,postStatsPageQuery,updateStataPageQuery,deleteStatsPageQuery}