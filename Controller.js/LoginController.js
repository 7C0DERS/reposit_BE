const  regservice=require('../service/registerService')



exports.registerApi =async function registerApi(req,res){
  
  try{
    const service = await regservice.registerSer(req.body)
    return res.send(service)
  }
  catch(err){
console.log(err);
  }
 
}


