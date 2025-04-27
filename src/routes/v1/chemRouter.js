const express=require('express');
const router=express.Router();
const {chemController}=require('../../controllers');

router.get('/',chemController.generate_poetry);

module.exports=router;
