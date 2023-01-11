const express=require('express');
const {authController,getUserProfile,registerUser} = require('../controllers/usersController')
const router=express.Router();
const {protect}=require('../middlewares/authMiddleware')

router.route('/').post(registerUser);

router.post('/login',authController);

router.route('/profile').get(protect,getUserProfile);
module.exports=router;

   

