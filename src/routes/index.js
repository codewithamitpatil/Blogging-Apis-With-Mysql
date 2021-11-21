
const express = require('express');
const router = express.Router();


// include routes 
const postRoutes = require('./post');
const authRoutes = require('./author');

// initialize routes
router.use('/post',postRoutes);
router.use('/author',authRoutes);

// exports
module.exports = router;

