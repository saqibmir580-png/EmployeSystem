const mongoose=require('mongoose')
const EmployeeSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    position:{
        type:String,
        required:true
    },
    salary:{
        type:Number,
        required:true
    },
})
const Employee=mongoose.model("Employee",EmployeeSchema)
module.exports=Employee