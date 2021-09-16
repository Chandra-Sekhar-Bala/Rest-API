const validator= require('validator')
const mongoose = require('mongoose');

// Defining Schema:

const EmployeeSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    city:{
        type:String
    },
    ph:{
        type:Number,
        required: true,
        trim: true,
        min:10,
        unique: [true,"ALready Exist"],
        // // validate:[validator.isEmail,"Error"]
    },
    email:{
        type:String,
        required:true,
        unique: [true,"Already Exist"],
        trim: true,
        lowercase: true,
        validate(data){
            if(!validator.isEmail(data))
            throw new Error("Not a E-mail")
        }
    },
    salary:{
        type:Number,
        trim:true
    }

})
// Creating a new collection using model:
const Employee = new mongoose.model("Employee",EmployeeSchema);

module.exports = Employee;
