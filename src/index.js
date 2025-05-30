const express=require('express');
const bodyParser=require('body-parser');
const router = require('./routes');
const app=express();
require('dotenv').config();

app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({extended:true}));
app.use('/study',router);

const port=process.env.PORT;
app.listen(port,()=>{
  console.log('Server running...');
});
