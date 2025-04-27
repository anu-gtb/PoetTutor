const {GoogleGenAI}=require('@google/genai');
require('dotenv').config();

const ai=new GoogleGenAI({apiKey:process.env.API_KEY});

async function generate(prompt){
  const response=await ai.models.generateContent({
    model:'gemini-2.0-flash',
    contents:`A poetry for mathematical formula ${prompt} in 4-5 lines for a student`
    //contents:`A poetry explaining mathematical formula for ${prompt} in 4-5 lines for a student`
  });
  return response.text;
}

exports.generate_poetry=async(req,res)=>{
  try{
    const data=req.body.formula;
    const result=await generate(data);
    res.send({
      'result':result
    });
  }
  catch(err){
    res.send(err);
  }
}
