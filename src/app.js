<<<<<<< HEAD
const mongo = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');

require('dotenv').config({path:'./config/dev.env'});
require("./db/mongoose");
const {router} = require('./router/user.router');

const app = express();
app.use(bodyParser.json());
app.use(router);

const port = process.env.PORT;

app.listen(port, () => {
    console.log(`Server running at ${port}`);
})
=======
const express=require('express');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const {router}=require('./router/router');
const app=express();

app.use(bodyParser.json());
app.use(router);
mongoose.connect('mongodb+srv://simanchala:xA6vsgeVUpGbFW0Y@cluster0.horp5xz.mongodb.net/lohith?retryWrites=true&w=majority&appName=Cluster0');
app.listen(3000,()=>{
    console.log("server running at port 3000")
});
>>>>>>> lohith
