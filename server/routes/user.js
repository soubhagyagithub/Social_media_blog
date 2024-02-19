const express = require('express');
const router = express.Router();
const postController = require('../controllers/userController');

// POST /post-user - Create a new post
router.post('/', postController.createPost);
router.get('/', postController.getPosts);
module.exports = router;