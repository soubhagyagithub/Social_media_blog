// controllers/postController.js
const Post = require('../models/user');

// Controller to handle creating a new post
exports.createPost = async (req, res) => {
    const { imageUrl, description } = req.body;

    try {
        // Create a new post using Sequelize
        const newPost = await Post.create({
            imageUrl,
            description,
        });

        return res.status(201).json(newPost);
    } catch (error) {
        console.error('Error creating post:', error);
        return res.status(500).json({ error: 'Failed to create post. Please try again.' });
    }
};


exports.getPosts = async (req, res) => {
    try {
        // Fetch all posts using Sequelize
        const posts = await Post.findAll();

        return res.status(200).json(posts);
    } catch (error) {
        console.error('Error fetching posts:', error);
        return res.status(500).json({ error: 'Failed to fetch posts. Please try again.' });
    }
};