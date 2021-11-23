
// importing test config
const { chai,expect,should,app } = require('../index.test');

// importing db connection
const db = require('../../src/db/mysql_init');


describe('Author Apis', () => {

  before(function() {
   console.log('////////////////')
    db.sync({ force: true})
    .then(() => {
        console.log('yes re-sync done!')
    });
    console.log('////////////////')
  });


let authId = 1;
let authorId = 1;

// create new author
describe('POST /api/author',()=>{
   
    it('It Should Create New Author',(done)=>{
     
     let data = {
        name:"Sumit Patil",
        email:"pamit8831@gmail.com"
     };

      chai.request(app)
          .post('/api/author')
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

//update author by aid
describe('PUT /api/author',()=>{
   
    it('It Should Update Author',(done)=>{
     
     let data = {
         name:"Sumit Patil updated",
         email:"pamit8831@gmail.com"
     };

      chai.request(app)
          .put(`/api/author/${authId}`)
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

//get all authors
describe('POST /api/author',()=>{
   
    it('It Should Fetch All Authors ',(done)=>{
     
      chai.request(app)
          .get(`/api/author`)
          .end((err,res)=>{
             res.should.have.status(200);
             console.log(res.body);
            expect(res.body).to.have.all
            .deep.keys('aid','name', 'email','createdAt','updatedAt');
             done();
          });
    });

});

//get  author by aid
describe('POST /api/author/:aid',()=>{
   
    it('It Should Fetch author By Author Id',(done)=>{
     
    chai.request(app)
          .get(`/api/author/${authId}`)
          .end((err,res)=>{
            res.should.have.status(200);
        
            res.body.should.be.a('object');
                console.log(res.body);
                  done();
          });
             
    });

});

//delete author by aid
describe('DELETE /api/author',()=>{
   
    it('It Should Delete author',(done)=>{

      chai.request(app)
          .delete(`/api/author/${authId}`)
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


