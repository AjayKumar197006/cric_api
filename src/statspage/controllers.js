const pool=require("../../db")
const queries=require("./queries")

const getStatsPage=(req,res)=>{
    pool.query(queries.getStatsPageQuery,(error,result)=>{
        if(error) throw error;
        res.status(200).json(result.rows)
    })
}

const postStatsPage=(req,res)=>{
    const {image_url,heading,post_url,categoryforstats}=req.body
    console.log(req.body)
    pool.query(queries.postStatsPageQuery,[image_url,heading,post_url,categoryforstats],(error,result)=>{
        console.log("enter post")
        if(error) throw error;
        res.status(201).send("Record inserted successfully")
    })
}

const updateStatsPage=(req,res)=>{
    const id=parseInt(req.params.id)
    const {image_url,heading,post_url,categoryforstats}=req.body
    pool.query(queries.updateStataPageQuery,[id,image_url,heading,post_url,categoryforstats],(error,result)=>{
        if(error) throw error;
        res.status(200).send("Updated Successfully")
    })
}

const deleteStatsPage=(req,res)=>{
    const id=req.params.id
    pool.query(queries.deleteStatsPageQuery,[id],(error,result)=>{
        if(error) throw error;
        res.status(200).send("Record Deleted")
    })
}

module.exports={getStatsPage,postStatsPage,updateStatsPage,deleteStatsPage}