const express = require('express');
const router = express.Router();
const Cart = require('../models/Cart');

// Get cart by user
router.get('/:userId', async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.params.userId }).populate('products.product');
    res.json(cart);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add or update cart
router.post('/', async (req, res) => {
  const { user, products } = req.body;
  try {
    let cart = await Cart.findOne({ user: user });
    if (!cart) {
      cart = new Cart({ user, products });
    } else {
      cart.products = products;
    }
    await cart.save();
    res.status(201).json(cart);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
