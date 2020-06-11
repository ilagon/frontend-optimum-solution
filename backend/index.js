const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const userRoutes = require('./routes/user');
const customerRoutes = require('./routes/customer');
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
app.use("/customers", customerRoutes); //using customerRoutes file

app.listen(PORT, () => console.log(`Server is running in port: ${PORT}`));

module.exports = app;