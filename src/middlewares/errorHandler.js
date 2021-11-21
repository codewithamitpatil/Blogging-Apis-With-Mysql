
const httpErrors = require('http-errors');

module.exports = errorHandler = async(err,req,res,next)=>{
  
   console.log(err);

   err.status = err.status || 500 ;

   if(err.isJoi){
       err.status = 400;
   }

   res.status(err.status).json({
        'status':err.status,
        'msg':err.message
    })


};