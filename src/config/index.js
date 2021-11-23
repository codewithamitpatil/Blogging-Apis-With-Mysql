
// for developement

const developement = {

  serviceName :'Blog',
  port        :3000,
  env         : 'developement', 
  // for mysql
  dbName : 'Blog1' ,
  host   : 'localhost' ,
  dbUser : 'root',
  dbPass : '',
  resync : false,
  
  // for jaeger
  jaegerHost:'localhost',
  jaegerPort:6832,

  // for logger
  logLevel:'silly',
  logPath : './logs/', 
  loggerConfig:{
    logLevel:process.env.logLevel || "silly",
    logPath:process.env.logPath||"./logs/",
    service:process.env.service || "Blog"
  },

   // for nodemailer
  nodemailerOptions:{
      service: "gmail",
      auth:{
            user: 'amitwebdev2019@gmail.com',
            pass: ''
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
  env         : 'production', 
   
    // for mysql
  dbName : '' ,
  host   : '' ,
  dbUser : '',
  dbPass : '',
  resync : false,

  // for jaeger
  jaegerHost:'',
  jaegerPort:6832,

  // for logger
  logLevel:'silly',
  logPath : './logs/', 
  loggerConfig:{
    logLevel:process.env.logLevel || "silly",
    logPath:process.env.logPath||"./logs/",
    service:process.env.service || "Blog"
  },

  // for nodemailer
  nodemailerOptions:{
      service: "gmail",
      auth:{
            user: 'amitwebdev2019@gmail.com',
            pass: ''
           } ,
      tls: {
            rejectUnauthorized: false
           }
  },

  adminMail:'amitwebdev2019@gmail.com',


}; 


// for test
const test = {

  serviceName :'Blog',
  port        : 3002,
  env         : 'test', 

  // for mysql
  dbName : 'TestBlog' ,
  host   : 'localhost' ,
  dbUser : 'root',
  dbPass : '',
  resync : false,
  
  // for jaeger
  jaegerHost:'',
  jaegerPort:6832,

  // for logger
  logLevel:'silly',
  logPath : './logs/', 
  loggerConfig:{
    logLevel:process.env.logLevel || "silly",
    logPath:process.env.logPath||"./logs/",
    service:process.env.service || "Blog"
  },

  // for nodemailer
  nodemailerOptions:{
      service: "gmail",
      auth:{
            user: 'amitwebdev2019@gmail.com',
            pass: ''
           } ,
      tls: {
            rejectUnauthorized: false
           }
  },

  adminMail:'amitwebdev2019@gmail.com',



}; 


//const env = 'Test';
const env = 'Developement';

let config ;

switch(env){

 case 'Developement':
       console.log('Developement Env');
       config = developement;
       break;

 case 'Production':
       console.log('Production Env');
       config = production;
       break;

 case 'Test':
       console.log('Test Env');
       config = test;
       break;
}

// exports
module.exports =  {...config};