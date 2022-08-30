const Products = require('../models/productModel')

ProductCtrl = {
  getProduct: async(req,res)=>{
       try {
           const product = await Products.find()
           res.json({product})
       } catch (err) {
           res.status(500).json({msg:err.message})
       }
  },
  createProduct: async(req,res)=>{
      try {
          const {product_id,title,price,description,content,images,type,category,subCategory} = req.body
          if(!images){
              return res.status(400).json({msg:"please upload a image"})
          }

          const newProduct = new Products({
            product_id,title,price,description,content,images,type,category,subCategory
          })
          await newProduct.save()

          res.json({msg:"create a product successfully"})
       
      } catch (err) {
         res.status(500).json({msg:err.message})
      }
  }
}

module.exports = ProductCtrl