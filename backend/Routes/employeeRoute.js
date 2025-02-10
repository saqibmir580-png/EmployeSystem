const express=require('express')
const { addEmployee, getEmployee, updateEmployee, deleteEmployee } = require('../controllers/employeeController')


const router=express.Router()

router.post('/employee/',addEmployee)
router.get('/employee',getEmployee)
router.put('/employee/:id',updateEmployee)
router.delete('/employee/:id',deleteEmployee)

module.exports=router;