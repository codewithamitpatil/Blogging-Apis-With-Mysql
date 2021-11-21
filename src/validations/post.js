
const joi = require('joi');

// exports
module.exports ={
    
 create : joi.object({
    title       : joi.string().required(),
    description : joi.string().required(),
    author      : joi.number().required()
 })
 ,
    
 update : joi.object({
    title       : joi.string().required().optional(),
    description : joi.string().required().optional(),
 })
 ,

};