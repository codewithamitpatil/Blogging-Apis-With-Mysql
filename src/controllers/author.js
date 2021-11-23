
const httpErrors =  require('http-errors');
const opentracing = require('opentracing');

// import blog validations
const authorVal = require('../validations/author');

// intialize global tracing
const tracer = opentracing.globalTracer();


const db = require('../models/index');

const Author = db.author;


// exports
module.exports = {

GetAll : async(req,res,next)=>{
   
    const span = tracer.startSpan('Fetch All Authors', { childOf: req.span })
   
    const author = await Author.findAll();
    res.send(author);
    
    span.setTag('Response Body',author);
    span.finish();
},

GetOne : async(req,res,next)=>{

   const span = tracer.startSpan('Fetch Author By Id', { childOf: req.span })
   span.setTag('Request Params',req.params.aid);

    const aid = req.params.aid;
    const author = await Author.findOne({ where: { aid: aid }});
    res.send(author);
    
    span.setTag('Response Body',author);
    span.finish();

},

Create : async(req,res,next)=>{
  
    const span = tracer.startSpan('Create New Author', { childOf: req.span })
    span.setTag('Request Body',req.body);

    const valData = await authorVal.create.validateAsync(req.body);
    const author = await Author.create(valData);
    res.json({ status:200,message:'Author Created SuccessFully'});
   
    span.log({author});
    span.setTag('Response Body',{ status:200,message:'author Created SuccessFully'});
    span.finish();
},

Update : async(req,res,next)=>{
    
    const span = tracer.startSpan('Update Author By aid', { childOf: req.span })
    span.setTag('Request Params',req.params.aid);

    const valData = await authorVal.update.validateAsync(req.body);
    const aid = req.params.aid;
    const author = await Author.update(valData, { where: { aid: aid }});
    res.json({ status:200,message:'Author Updated SuccessFully'});

    span.log({author});
    span.setTag('Response Body',{ status:200,message:'Author Updated SuccessFully'});
    span.finish();
},

Remove : async(req,res,next)=>{

    const span = tracer.startSpan('Delete Author By aid', { childOf: req.span })
    span.setTag('Request Params',req.params.aid);

    const aid = req.params.aid;
    const author = await Author.destroy({ where: { aid: aid }});
    res.json({ status:200,message:'Author Deleted SuccessFully'});
    
    span.log({author});
    span.setTag('Response Body',{ status:200,message:'Author Deleted SuccessFully'});
    span.finish();
}


};
