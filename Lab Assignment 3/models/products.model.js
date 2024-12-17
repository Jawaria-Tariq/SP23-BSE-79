const mongoose = require('mongoose');

let productSchema = mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',       
    },
});

let productModel = mongoose.model("Product", productSchema);

module.exports = productModel;