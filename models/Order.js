const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    products: [{
        product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
        quantity: { type: Number, required: true, min: 1 }
    }],
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    totalCost: { type: Number, required: true }
});

module.exports = mongoose.model('Order', orderSchema);
