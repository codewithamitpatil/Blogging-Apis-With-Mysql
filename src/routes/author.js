
const express = require('express');
const router = express.Router();

// include async handler
const asyncHandler = require('../middlewares/asyncHandler');

// include blog controller
const authController = require('../controllers/author');

// get all posts
router.get('',asyncHandler(authController.GetAll));

// get all posts by author
router.get('/:aid',asyncHandler( authController.GetOne));

// create new post
router.post('',asyncHandler( authController.Create))

// update post by post id
router.put('/:aid',asyncHandler( authController.Update));

// delete post by post id
router.delete('/:aid',asyncHandler( authController.Remove))

// exports
module.exports = router;

