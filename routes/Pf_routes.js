const express =require('express')
const { sendEmailController } = require('../controllers/Pf_controller')

const router=express.Router()
// routes
router.post('/sendEmail',sendEmailController)

module.exports=router