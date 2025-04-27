const express=require('express');
const router=express.Router();
const {mathController}=require('../../controllers');

router.get('/',mathController.generate_poetry);

module.exports=router;
