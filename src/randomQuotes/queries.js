const getRandomQuoteQuery="SELECT * FROM randomQuotes limit 1 order by rand()"
const postRandomQuoteQuery="INSERT INTO randomQuotes (quote,name) values($1,$2)"
const updateRandomQuoteQuery="UPDATE randomQuotes SET quote=$2, name=$3 WHERE id=$1"
const deleteRandomQuoteQuery="DELETE FROM randomQuotes WHERE id=$1"

module.exports={getRandomQuoteQuery,postRandomQuoteQuery,updateRandomQuoteQuery,deleteRandomQuoteQuery}