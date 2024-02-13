const students = require("../Models/userModel");

exports.register = async(req, res) => {
    console.log("Inside Register Request");
    const { fname, lname, email, addr1, pwd, mob, gender, course, joinDate, appStatus } = req.body
    // console.log(id, fname, lname, email, addr1, pwd, mob, gender, course, joinDate, appStatus);

    try{
    //check email already exist
    const existingUser=await students.findOne({email})
    console.log(existingUser);
    if(existingUser){
        res.status(406).json("User email already exist")
    }
    else{
        const newStudent= new students({
            fname, lname, email, addr1, pwd, mob, gender, course, joinDate, appStatus:""
        })

        await newStudent.save()
        res.status(200).json("Registration Complete!")
    }
}catch(err){
    res.status(401).json(err)
}
    
}

exports.students = async(req, res) => {
    console.log("inside student profiles table get request");
    

    try{
        //check email already exist
        const allUser=await students.find()
    console.log(allUser);
        if(!allUser){
            res.status(201).json("No profiles")
        }
        else{
           
            res.status(200).json(allUser)
        }
    }catch(err){
        res.status(401).json(err)
    }
    
}