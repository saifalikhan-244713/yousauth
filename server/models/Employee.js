const mongoose = require('mongoose')

const EmployeeSchema = new mongoose.Schema({
    email:String,
    password:String
})

const employeeModel1 = mongoose.model("employees", EmployeeSchema)
module.exports = employeeModel1