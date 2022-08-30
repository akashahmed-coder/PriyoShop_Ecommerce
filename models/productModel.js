const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    product_id:{
        type:String,
        required:true,
        unique:true,
        trim:true
    },
    title:{
        type:String,
        required:true,
        trim:true
    },
    price:{
        type:Number,
        required:true,
        trim:true
    },
    description:{
        type:String,
        required:true,
        trim:true
    },
    content:{
        type:String,
        required:true,
        trim:true
    },
    images:{
        type:Object,
        required:true,
    },
    type:{
        type:String
    },
    category:{
        type:String  
    },
    subCategory:{
        type:String
    },
    cheked:{
        type:Boolean,
        default:false
       
    },
    sold:{
        type:Number,
        default:0
    }
    },{
    timestamps:true
    })




const Products = mongoose.model("Producs",productSchema)
module.exports = Products