const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose")


const {router} = require("./router/userRouter");
require("dotenv").config({ path: "./config/dev.env" });
const app = express();
require("./db/mongoose");
app.use(bodyParser.json());
app.use(router);
const port = process.env.PORT;


app.listen(port, () => {
    console.log("server running at port 4000");
});
