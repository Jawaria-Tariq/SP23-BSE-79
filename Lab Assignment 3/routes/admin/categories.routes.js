const express = require("express");
const router = express.Router();
const categoryModel = require("../../models/categories.model"); 


router.get("/Add", (req, res) => {
    res.render("admin/categories/categories-add", { layout: 'layout' });
});

//Read
router.get("/Read", async (req, res) => {
    const categories = await categoryModel.find();
    res.render("admin/categories/categories-read", { categories });
});

//ADD
router.post("/create", async (req, res) => {
    const { name, description } = req.body;

    await categoryModel.create({
        name, 
        description,
    });

    res.redirect("/admin/categories/Read"); 
});

//Delete
router.get("/Delete/:id", async (req, res) => {
    await categoryModel.findOneAndDelete({ _id: req.params.id });
    res.redirect("/admin/categories/Read"); 
});

//Edit
router.get("/Edit/:id", async (req, res) => {
    const category = await categoryModel.findOne({ _id: req.params.id });
    res.render("admin/categories/categories-edit", { category });
});

router.post("/update/:id", async (req, res) => {
    const { name, description } = req.body;

    await categoryModel.findOneAndUpdate(
        { _id: req.params.id },
        { name, description },
        { new: true }
    );

    res.redirect("/admin/categories/Read"); 
});

module.exports = router;
