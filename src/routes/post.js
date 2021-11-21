
const express = require('express');
const router = express.Router();

// include async handler
const asyncHandler = require('../middlewares/asyncHandler');

// include blog controller
const postController = require('../controllers/post');

// get all posts
router.get('',asyncHandler( postController.GetAll));

// get all posts by author
router.get('/:author',asyncHandler( postController.GetOne));

// create new post
router.post('',asyncHandler( postController.Create))

// update post by post id
router.put('/:pid',asyncHandler( postController.Update));

// delete post by post id
router.delete('/:pid',asyncHandler( postController.Remove))

// exports
module.exports = router;

