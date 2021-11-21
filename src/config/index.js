
// for developement

const developement = {

  serviceName :'Blog',
  port        :3000,

  // for mysql
  dbName : 'Blog1' ,
  host   : 'localhost' ,
  dbUser : 'root',
  dbPass : '',

   // for nodemailer
  nodemailerOptions:{
      service: "gmail",
      auth:{
            user: 'amitwebdev2019@gmail.com',
            pass: '8888565473'
           } ,
      tls: {
            rejectUnauthorized: false
           }
  },

  adminMail:'amitwebdev2019@gmail.com',



}; 


// for production
const production = {

  serviceName : 'Blog',
  port        : process.env.PORT || 3001,
 
    // for mysql
  dbName : '5GlSHutQPo' ,
  host   : 'remotemysql.com' ,
  dbUser : '5GlSHutQPo',
  dbPass : 'Y6E5xeC1bL',

    // for nodemailer
  nodemailerOptions:{
      service: "gmail",
      auth:{
            user: 'amitwebdev2019@gmail.com',
            pass: '8888565473'
           } ,
      tls: {
            rejectUnauthorized: false
           }
  },

  adminMail:'amitwebdev2019@gmail.com',


}; 


const isProduction = true;

if(isProduction){
    console.log('Production Env');
}else{
    console.log('Developement Env');
}

// exports
module.exports =  isProduction ? {...production} : {...developement};