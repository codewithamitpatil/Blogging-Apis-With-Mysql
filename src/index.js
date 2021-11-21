
const express = require('express');

// include config
const {port} = require('./config/index');

// imorting server
const server = require('./app.js');




const Server = ()=>{
   server.listen(port,()=>{
       console.log(`Server is listening on port ${port}`);
   });
};

Server();
