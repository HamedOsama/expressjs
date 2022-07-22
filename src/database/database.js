const mongoose=require('mongoose')
const productSchema=mongoose.Schema({
    name:{
        type:String,
        trim:true,
        require:true
    },
    image:{
        type:Buffer,
        require:true
    },
    rank:{
        type:Number,
        require:true
    }
})
 const Product=mongoose.model('products',productSchema)
 module.exports=Product