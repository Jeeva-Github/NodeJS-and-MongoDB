const express = require('express');
const router = express.Router();
const Comment = require('../models/Comment');

// Get all comments
router.get('/', async (req, res) => {
  try {
    const comments = await Comment.find().populate('product').populate('user');
    res.json(comments);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new comment
router.post('/', async (req, res) => {
  const comment = new Comment({
    product: req.body.product,
    user: req.body.user,
    rating: req.body.rating,
    images: req.body.images,
    text: req.body.text
  });

  try {
    const newComment = await comment.save();
    res.status(201).json(newComment);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
