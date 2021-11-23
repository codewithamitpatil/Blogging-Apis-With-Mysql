
const httpErrors = require('http-errors');

// importing logger
const logger = require('../logger/logger');

// exports
module.exports = errorHandler = async(err,req,res,next)=>{
  
  

   err.status = err.status || 500 ;

   if(err.isJoi){
       err.status = 400;
   }
  
   logger.error({
     message:`${err}`,
     sta:err.status
   });

   res.status(err.status).json({
        'status':err.status,
        'msg':err.message
    })


};