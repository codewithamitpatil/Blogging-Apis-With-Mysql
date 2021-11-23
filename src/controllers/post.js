
const httpErrors =  require('http-errors');
const opentracing = require('opentracing');


// import blog validations
const postVal = require('../validations/post');



// importing mail sender 
const mailSend = require('../helpers/mailSender');

const db = require('../models/index');
// post model
const Post = db.post;
// author model
const Author = db.author;

// intialize global tracing
const tracer = opentracing.globalTracer();


// exports
module.exports = {

GetAll : async(req,res,next)=>{
 
    const span = tracer.startSpan('Fetch All Posts', { childOf: req.span })
   
    const post = await Post.findAll();
    res.send(post);

    span.setTag('Response Body',post);
    span.finish();


},

GetOne : async(req,res,next)=>{

    const span = tracer.startSpan('Fetch All Posts By Author Id', { childOf: req.span })
    span.setTag('Request param',req.params.author);

    const pid = req.params.author;
    const post = await Post.findAll({ where: { author: pid }});
    res.send(post);
    
    span.setTag('Response Body',post);
    span.finish();

},

Create : async(req,res,next)=>{
  

    const span = tracer.startSpan('Create New Post', { childOf: req.span })
    span.setTag('Request Body',req.body);

    const valData = await postVal.create.validateAsync(req.body);
    
    const authIdCheck = await Author.findOne({ where: { aid: valData.author }}); 
    
    if(authIdCheck == null || authIdCheck == "undefined"){
       return next(new httpErrors.NotFound('Invalid Author Id')) ;
    }

    const post = await Post.create(valData);

    await mailSend(authIdCheck.email,' Post is sent to all other authors SuccessFully',post.title,post.description,post.createdAt);
    res.json({ status:200,message:'Post Created SuccessFully'});

    span.log({post});
    span.setTag('Response Body',{ status:200,message:'Post Created SuccessFully'});
    span.finish();

},

Update : async(req,res,next)=>{
  
    const span = tracer.startSpan('Update Post', { childOf: req.span })
    span.setTag('Request Body',req.body);

    const valData = await postVal.update.validateAsync(req.body);
    const pid = req.params.pid;
    const post = await Post.update(valData, { where: { pid: pid }});
    res.json({ status:200,message:'Post Updated SuccessFully'});

    span.log({post});
    span.setTag('Response Body',{ status:200,message:'Post Updated SuccessFully'});
    span.finish();
},

Remove : async(req,res,next)=>{
   
    const span = tracer.startSpan('Delete Post', { childOf: req.span })
    span.setTag('Request Params',req.params.pid);

    const pid = req.params.pid;
    const post = await Post.destroy({ where: { pid: pid }});
    res.json({ status:200,message:'Post Deleted SuccessFully'});
       
    span.log({post});
    span.setTag('Response Body',{ status:200,message:'Post Deleted SuccessFully'});
    span.finish();
}


};
