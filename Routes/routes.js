const express= require('express')
const userController=require('../Controllers/userController')

const router=express.Router();

router.post('/register',userController.register)
router.get('/students',userController.students)

module.exports =router