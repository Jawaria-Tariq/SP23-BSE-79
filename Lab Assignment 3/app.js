const express =require("express");
const expressLayout = require("express-ejs-layouts")
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));
app.use(expressLayout); 

app.set("view engine", "ejs");

//Routes
const adminProductRouter = require("./routes/admin/products.routes");
app.use("/admin/products", adminProductRouter);

const adminCategoryRouter = require("./routes/admin/categories.routes");
app.use("/admin/categories", adminCategoryRouter);

app.get('/', (req,res) => {
    return res.render('home');
});

//Database Connection
const connectdb = require("./db");

const Port = 7000;

const start =async() =>{
    await connectdb();
    app.listen(Port, () =>{
        console.log(`Server started at localhoat${Port}`);
    });
}

start();