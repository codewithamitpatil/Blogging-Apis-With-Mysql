
const express = require('express');

// include config
const {port} = require('./config/index');

// importing logger
const logger = require('./logger/logger');


// imorting server
const server = require('./app.js');




const Server = ()=>{
   server.listen(port,()=>{

        logger.info({
        message:`Server is listening on port : ${port}`,
        Function:"listen()",
        File:"index.js",
        Purpose: "To check server is started  or not",
        });
  });
};

Server();
