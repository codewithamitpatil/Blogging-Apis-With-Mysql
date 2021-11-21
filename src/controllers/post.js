
const httpErrors =  require('http-errors');

// import blog validations
const postVal = require('../validations/post');

// importing mail sender 
const mailSend = require('../helpers/mailSender');

const db = require('../models/index');
// post model
const Post = db.post;
// author model
const Author = db.author;

// exports
module.exports = {

GetAll : async(req,res,next)=>{
 
    const post = await Post.findAll();
    res.send(post);

},

GetOne : async(req,res,next)=>{

    const pid = req.params.author;
    const post = await Post.findAll({ where: { author: pid }});
    res.send(post);

},

Create : async(req,res,next)=>{
  
    const valData = await postVal.create.validateAsync(req.body);
    const post = await Post.create(valData);
    const author = await Author.findOne({ where: { aid: valData.author }}); 

    await mailSend(author.email,' Post is sent to all other authors SuccessFully',post.title,post.description,post.createdAt);
    res.json({ status:200,message:'Post Created SuccessFully'});
    
},

Update : async(req,res,next)=>{
  
    const valData = await postVal.update.validateAsync(req.body);
    const pid = req.params.pid;
    const post = await Post.update(valData, { where: { pid: pid }});
    res.json({ status:200,message:'Post Updated SuccessFully'});

},

Remove : async(req,res,next)=>{

    const pid = req.params.pid;
    const post = await Post.destroy({ where: { pid: pid }});
    res.json({ status:200,message:'Post Deleted SuccessFully'});

}


};
