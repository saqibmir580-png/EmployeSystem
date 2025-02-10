
const Employee=require("../models/Employee")
//Add employee
exports.addEmployee=async(req,res)=>{
    try {
        const employee=new Employee(req.body)
        await employee.save()
        res.status(201).json(employee)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}
//get all employee
exports.getEmployee=async(req,res)=>{
    try {
        const employee=await Employee.find()
        res.json(employee)
    } catch (error) {
        
        res.status(400).json({error:error.message})
    }
}
//update the employee
exports.updateEmployee=async(req,res)=>{
    try {
        const employee=await Employee.findByIdAndUpdate(req.params.id,req.body,{new:true})
        res.json(employee)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}
//delte the employee
exports.deleteEmployee=async(req,res)=>{
    try {
        const employee=await Employee.findByIdAndDelete(req.params.id)
        res.json(employee)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}