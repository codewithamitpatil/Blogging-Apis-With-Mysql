
const joi = require('joi');

// exports
module.exports ={
    
 create : joi.object({
    name     : joi.string().required(),
    email    : joi.string().required(),
})
 ,
    
 update : joi.object({
    name      : joi.string().required().optional(),
    email     : joi.string().required().optional(),
 })
 ,

};