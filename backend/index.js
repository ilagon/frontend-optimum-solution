const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const userRoutes = require('./routes/user');
const creditcardRoutes = require('./routes/creditcard');
const approveRoutes = require('./routes/approve');
const denyRoutes = require('./routes/deny');
const pendingRoutes = require('./routes/pending')
const cors = require("cors");

const app = express();

const PORT = process.env.PORT || 9000;

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/bankAppPhase2', {

useNewUrlParser: true,

useUnifiedTopology: true

});

app.use(cors());
//body parser setup
app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json());

//Routes
app.use("/users", userRoutes); //Using userRoutes file
app.use("/creditcard", creditcardRoutes); //using customerRoutes file

app.use("/approve",approveRoutes); // Approve the creditcard application of a customer
app.use("/deny",denyRoutes); // Deny the creditcard application of a customer
app.use("/pending", pendingRoutes) // To be able to retrieve all pending customer

app.listen(PORT, () => console.log(`Server is running in port: ${PORT}`));

module.exports = app;