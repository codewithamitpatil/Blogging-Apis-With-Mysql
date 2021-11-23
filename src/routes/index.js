
const express = require('express');
const router = express.Router();


// include routes 
const postRoutes = require('./post');
const authRoutes = require('./author');

// initialize routes
router.use('/author',authRoutes);
router.use('/post',postRoutes);


// exports
module.exports = router;

