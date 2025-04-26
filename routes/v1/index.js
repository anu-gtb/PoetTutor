const express=require('express');
const router=express.Router();
const mathRouter=require('./mathRouter');
const chemRouter=require('./chemRouter');

router.use('/reaction',chemRouter);

router.use('/formula',mathRouter);

module.exports=router;