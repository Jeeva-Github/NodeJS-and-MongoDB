const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  description: String,
  image: String,
  pricing: Number,
  shippingCost: Number
});

module.exports = mongoose.model('Product', productSchema);
