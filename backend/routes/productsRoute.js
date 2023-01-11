const express=require('express');
const {getProduct,getProducts} =require('../controllers/productsConroller');
const router=express.Router();

router.route('/products').get(getProducts);
router.route('/products/:id').get(getProduct);

module.exports=router;