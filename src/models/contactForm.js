const mongoose=require('mongoose')
const validator=require('validator')
const visitorSchema=mongoose.Schema({
    name:{
    type:String,
    trim:true,
    required:true
    },
    email:{
        type:String,
        trim:true,
        lowercase:true,
        validate(value){
            if(!validator.isEmail(value))
                throw new Error('Please enter validate email !!')
    }
},
phone:{
    type:String,
    required:true
},
message:{
    type:String,
    minLength:5,
    trim:true
}

})
const Visitor=mongoose.model('visitors',visitorSchema)
module.exports=Visitor