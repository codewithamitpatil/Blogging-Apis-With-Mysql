
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const httpErrors = require('http-errors');
const compression = require('compression');
const methodOverride = require('method-override');

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

// compress all
app.use(compression());

// Support PUT, DELETE on client where it doesn't work
app.use(methodOverride());

// for json parsing
app.use(express.json());

// for url encoded data parsing
app.use(express.urlencoded({extended:true}));

// intialize morgan logging middleware
require('./logger/morganLogger')(app);

// intialize express status monitor
require('./monitor/statusMonitor')(app);

// intialize tracing middleware
require('./tracer/tracer')(app);


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