
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const httpErrors = require('http-errors');


// include api routes
const apiRoutes = require('./routes/index');

// include centrlize error handler
const errorHandler = require('./middlewares/errorHandler');


// intialize app
const app = express();

// enable cors
app.use('*',cors());

// enable helmet
app.use(helmet());

// for json parsing
app.use(express.json());

// for url encoded data parsing
app.use(express.urlencoded({extended:true}));


// intialize routes
app.use('/api',apiRoutes);

// demo route
app.get('',async(req,res,next)=>{
   res.send('Hello from Blog Service');
});


// 404 error handler
app.use('*',async(req,res,next)=>{
   return next(httpErrors.NotFound('Requested Page Not Found'));
});

// error handler
app.use(errorHandler);

// exports app
module.exports = app;