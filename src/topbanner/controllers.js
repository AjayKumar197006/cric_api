const pool =require('../../db')
const queries=require('./queries')

const getTopBannerData=(req,res)=>{
    pool.query(queries.getTopBannerQuery,(error,result)=>{
        if(error) throw error;
        res.status(200).json(result.rows)
       
    })
}

const addTopBannerData=(req,res)=>{
    const { match_type,match_date,match_time }=req.body
    pool.query(queries.addTopBannerQuery,[match_type,match_date,match_time], (error,results)=>{
        if(error) throw error;
        res.status(201).send("Record added successfully")
    })
}

const updateBannerData=(req,res)=>{
    const id=parseInt(req.params.id)
    const {match_type,match_date,match_time}=req.body
    pool.query(queries.updateBannerQuery,[id,match_type,match_date,match_time],(error,results)=>{
        if(error) throw error;
        res.status(200).send("updated")
    })
}

const deleteBannerData=(req,res)=>{
    const id=parseInt(req.params.id)
    pool.query(queries.deleteBannerQuery,[id],(error,results)=>{
        if(error) throw error;
        res.status(200).send("Deleted")

    })
}

module.exports={getTopBannerData,addTopBannerData,updateBannerData,deleteBannerData}