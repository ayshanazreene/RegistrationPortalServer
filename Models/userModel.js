const mongoose=require('mongoose')

const studSchema = new mongoose.Schema({
    fname:{
        type:String,
        required:true
    }, 
    lname:{
        type:String,
        required:true
    },
     email:{
        type:String,
        required:true
    },
     addr1:{
        type:String,
        required:true
    }, 
    pwd:{
        type:String,
        required:true
    }, 
    mob:{
        type:String,
        required:true
    }, 
    gender:{
        type:String,
        required:true
    }, 
    course:{
        type:String,
        required:true
    },
     joinDate:{
        type:String,
        required:true
    },
     appStatus :{
        type:String,
      
    }
})

const students = mongoose.model('students',studSchema)

module.exports = students

