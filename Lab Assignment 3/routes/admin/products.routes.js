const express = require("express");
const router = express.Router();
const productModel = require("../../models/products.model");
const categoryModel = require("../../models/categories.model");

// Add 
router.get("/Add", async (req, res) => {
    const categories = await categoryModel.find(); 
    res.render("admin/products/product-add", { categories, layout: 'layout' });
});

// Read 
router.get("/Read", async (req, res) => {
    const products = await productModel.find().populate('category');
    res.render("admin/products/product-read", { products });
});


router.post("/create", async (req, res) => {
    const { name, description, price, category } = req.body;
    await productModel.create({
        name,
        description,
        price,
        category, 
    });
    res.redirect("/admin/products/Read");
});

// Delete
router.get("/Delete/:id", async (req, res) => {
    await productModel.findOneAndDelete({ _id: req.params.id });
    res.redirect("/admin/products/Read");
});

// Edit
router.get("/Edit/:id", async (req, res) => {
    const product = await productModel.findOne({ _id: req.params.id }).populate('category'); 
    const categories = await categoryModel.find(); 
    res.render("admin/products/product-edit", { product, categories });
});



router.post("/update/:id", async (req, res) => {
    const { name, description, price, category } = req.body;
    await productModel.findOneAndUpdate({ _id: req.params.id }, { name, description, price, category }, { new: true });
    res.redirect("/admin/products/Read");
});

module.exports = router;