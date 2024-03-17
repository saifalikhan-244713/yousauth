const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const employeeModel1 = require('./models/Employee')

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://localhost:27017/newemployee",{useNewUrlParser: true, useUnifiedTopology: true })

app.post('/login', (req,res)=>{
    const {email, password} = req.body;
    employeeModel1.findOne({email:email})
    .then(user=>{
        if(user){
            if(user.password === password)
                res.json("success")
            else    
                res.json("the password is incorrect") 
        }
        else
            res.json("no record existed")
    })
})

app.post('/register', (req,res)=>{
    employeeModel1.create(req.body)
    .then(employees1 => res.json(employees1))
    .catch(err => res.json(err))
})

PORT=3001
app.listen(PORT, ()=>{
    console.log("server is running at port:", PORT);
})