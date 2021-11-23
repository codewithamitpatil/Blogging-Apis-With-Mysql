
// importing test config
const { chai,expect,should,app } = require('../index.test');


describe('Post Apis', () => {

let postId = 1;
let authorId = 1;


// update post by pid
describe('PUT /api/post',()=>{
   
    it('It Should Update New Post',(done)=>{
     
     let data = {
         title       :'Test Blog Update',
         description :'Hello we are Updating'
     };

      chai.request(app)
          .put(`/api/post/${postId}`)
          .send(data)
          .end((err,res)=>{
             res.should.have.status(200);
             res.body.should.be.a('object');
             res.body.should.have.property('message');
             res.body.should.have.property('status');
             console.log(res.body);
             done();
          });
    });

});

// get all posts
describe('POST /api/post',()=>{
   
    it('It Should Fetch All Posts',(done)=>{
     
      chai.request(app)
          .get('/api/post')
          .end((err,res)=>{
        
             res.should.have.status(200);
            expect(res.body).to.have.all
            .deep.keys('pid','title', 'author','createdAt','description','updatedAt');
             done();
          });
    });

});

// get all posts by author id
describe('POST /api/post/:author',()=>{
   
    it('It Should Fetch All Posts By Author Id',(done)=>{
     
      chai.request(app)
          .get(`/api/post/${authorId}`)
          .then((res)=>{
             res.should.have.status(200);
             console.log(res.body);
    
            expect(res.body).to.have.all
            .deep.keys('pid','title', 'author','createdAt','description','updatedAt');
             done();
          });
    });

});




// delete post by pid
describe('DELETE /api/post',()=>{
   
    it('It Should Delete New Post',(done)=>{

      chai.request(app)
          .delete(`/api/post/${postId}`)
          .end((err,res)=>{
             res.should.have.status(200);
             res.body.should.be.a('object');
             res.body.should.have.property('message');
             res.body.should.have.property('status');
             console.log(res.body);
             done();
          });
    });

});

});



