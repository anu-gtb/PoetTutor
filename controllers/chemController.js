const {GoogleGenAI}=require('@google/genai');
require('dotenv').config();

const ai=new GoogleGenAI({apiKey:process.env.API_KEY});

// async function generate(prompt1,prompt2){
//   const response=await ai.models.generateContent({
//     model:'gemini-2.0-flash',
//     contents:`A poetry explaining chemical reaction between ${prompt1} to give ${prompt2} in 4-5 lines for a student`
//   });
//   return response.text;
// }

async function generate(prompt){
  const response=await ai.models.generateContent({
    model:'gemini-2.0-flash',
    contents:`A poetry explaining chemical reaction between ${prompt} in 4-5 lines for a student`
  });
  return response.text;
}

exports.generate_poetry=async(req,res)=>{
  try{
    const data=req.body.reaction;
    //const data1=req.body.reactants;
    //const data2=req.body.products;
    const result=await generate(data);
    //const result=await generate(data1,data2);
    res.send({
      'result':result
    });
  }
  catch(err){
    res.send(err);
  }
}