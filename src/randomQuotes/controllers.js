const pool=require("../../db")
const queries=require("./queries")

const getRandomQuote=(req,res)=>{
    pool.query(queries.getRandomQuoteQuery,(error,result)=>{
        if(error) throw error;
        res.status(200).json(result.rows)
    })
}

const postRandomQuote=(req,res)=>{
    const {quote,name}=req.body
    pool.query(queries.postRandomQuoteQuery,[quote,name],(error,result)=>{
        if(error) throw error;
        res.status(201).send("Record insert successfully")
        
    })
}

const updateRandomQuote=(req,res)=>{
    const id=parseInt(req.params.id)
    const {quote,name}=req.body
    pool.query(queries.updateRandomQuoteQuery,[id,quote,name],(error,result)=>{
        if(error) throw error;
        res.status(200).send("Updated record")
    })
}

const deleteRandomQuote=(req,res)=>{
    const id=parseInt(req.params.id)
    pool.query(queries.deleteRandomQuoteQuery,[id],(error,result)=>{
        if(error) throw error;
        res.status(200).send("deleted record")
    })
}

module.exports={getRandomQuote,postRandomQuote,updateRandomQuote,deleteRandomQuote}