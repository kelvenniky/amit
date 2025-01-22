const productModel = require("../models/productModel.jsx")

const getProductController =async (req,res)=>{
    try{

        const allProduct = await productModel.find().sort({createdAt: -1})
        res.json({
            message:"All products",
            error:false,
            success:true,
            data:allProduct
            
        })
    }catch(err){
        res.status(400).json({
            message : err.message || err,
            error : true,
            success : false
        })
    
    }
}
module.exports = getProductController