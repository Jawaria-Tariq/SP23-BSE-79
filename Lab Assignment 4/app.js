const express =require("express");
const expressLayout = require("express-ejs-layouts")
const app = express();
const cookieParser = require("cookie-parser");
require("dotenv").config();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser()); 

app.use(express.static("public"));
app.use(expressLayout); 

app.set("view engine", "ejs");



const MainPageroutes = require("./routes/admin/Mainpage.routes");




app.use("/", MainPageroutes);


//Database Connection
const connectdb = require("./db");

const Port = 2000;

const start =async() =>{
    await connectdb();
    app.listen(Port, () =>{
        console.log(`Server started at localhost${Port}`);
    });
}

start();