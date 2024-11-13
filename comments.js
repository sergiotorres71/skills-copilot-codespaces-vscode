// Create web sever
const express = require('express');
const router = express.Router();
const Comment = require('../models/Comment');
const Post = require('../models/Post');
const User = require('../models/User');
const { check, validationResult } = require('express-validator');
const auth = require('../middleware/auth');

// @route POST api/comments
// @desc Create a new comment
// @access Private
router.post('/', [auth, [
    check('content', 'Content is required').not().isEmpty(),
    check('post', 'Post is required').not().isEmpty()
]], async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({
            message: errors.array()
        });
    }

    try {
                const user = await User.findById(req.user.id);
                // Add your logic here
            } catch (err) {
                console.error(err.message);
                res.status(500).send('Server Error');
            }
        });