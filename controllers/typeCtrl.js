const Types = require('../models/typeModel')

const typeCtrl = {
    getType:async(req,res)=>{
        try {
            const type = await Types.find()
            res.json({type})
        } catch (err) {
            res.status(500).json({msg:err.message})
        }
    },
    createType:async(req,res)=>{
        try {
            const {name} = req.body
            const type = await Types.findOne({name})
            if(type){
               return res.status(400).json({msg:"this type is already created"})
            }
            const newType = new Types({
                name
            })
            newType.save()
            res.json({msg:"type is create"})
        } catch (err) {
            res.status(500).json({msg:err.message})
            
        }
    }
}

module.exports = typeCtrl