const mongoose =require('mongoose');

let categorieSchema = mongoose.Schema({
    name: {type: String, unique: true},
    description: String,
});

let categoryModel = mongoose.model("Category" , categorieSchema);

module.exports = categoryModel;