
const httpErrors =  require('http-errors');

// import blog validations
const authorVal = require('../validations/author');

const db = require('../models/index');

const Author = db.author;


// exports
module.exports = {

GetAll : async(req,res,next)=>{
 
    const author = await Author.findAll();
    res.send(author);

},

GetOne : async(req,res,next)=>{

    const aid = req.params.aid;
    const author = await Author.findAll({ where: { aid: aid }});
    res.send(author);

},

Create : async(req,res,next)=>{
  
    const valData = await authorVal.create.validateAsync(req.body);
    const author = await Author.create(valData);
    res.json({ status:200,message:'Author Created SuccessFully'});

},

Update : async(req,res,next)=>{
  
    const valData = await authorVal.update.validateAsync(req.body);
    const aid = req.params.aid;
    const author = await Author.update(valData, { where: { aid: aid }});
    res.json({ status:200,message:'Author Updated SuccessFully'});

},

Remove : async(req,res,next)=>{

    const aid = req.params.aid;
    const author = await Author.destroy({ where: { aid: aid }});
    res.json({ status:200,message:'Author Deleted SuccessFully'});

}


};
