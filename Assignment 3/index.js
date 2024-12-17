const express = require("express");
const app = express();

app.set('views', __dirname + '/view-ejs');
app.set("view engine", "ejs");


app.use(express.static("public"));


app.get("/", function(req, res) {
    res.render("bootstrap");
});

app.get("/portfolio", function(req, res) {
    res.render("portfolio");
});


app.listen(7000, () => {
    console.log("Server started at localhost:7000");
});
