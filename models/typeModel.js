const mongoose = require('mongoose')

const typeSchema = new mongoose.Schema({
    name:{
        type:String
    }
},{
    timestamps:true
})


const Types = mongoose.model("type",typeSchema)
module.exports = Types