require("dotenv").config();

const mongoose = require('mongoose');
const express = require('express');
const app = express();
const bodyParser=require("body-Parser");
const cookieparser = require("cookie-parser");
const cors = require("cors");

const authRoutes = require('./Routes/auth')

//db connection
mongoose.connect("mongodb+srv://santhoshrk:10022000@cluster0.wu6fy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
.then(()=>console.log("DB CONNECTED SUCESSFULLY"))


//middlewares
app.use(bodyParser.json());
app.use(cookieparser());
app.use(cors());

//my routes
app.use("/api", authRoutes);

//ports
const port =3000;


app.listen(port,()=>{
    console.log(`app is running at ${port}`);
});