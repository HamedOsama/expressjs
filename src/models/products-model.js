// const data = {
//     name: 'data received',
//     Image : '../../'
// }
// module.exports =  data;
const mongoose=require('mongoose')

const productSchema=mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:true,
    },
    image:{
        type:Buffer,
       // require:true,
    },
    rank:{
        type:Number,
        required:false
    }
})
productSchema.methods.toJson=function(){
    const product=this
    const productObj=product.toObject
    return productObj
}
 const Product=mongoose.model('products',productSchema)
 module.exports=Product
