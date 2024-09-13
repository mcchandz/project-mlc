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