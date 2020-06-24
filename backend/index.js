//From Ain: Accept incoming change (Login and Admin Module integration)
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const userRoutes = require('./routes/user');
const creditcardRoutes = require('./routes/creditcard');
const approveRoutes = require('./routes/approve');
const denyRoutes = require('./routes/deny');
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 7001;
//mongo connection - mongoose is a library to simplify syntax to mongo DB
mongoose.Promise = global.Promise; // gets a response from DB fail or success

//"mongodb+srv://optimum-leads:12345@optimumbatch7-1rg4n.mongodb.net/bankappphase2?retryWrites=true&w=majority"
//connect to the schema
//mongodb://localhost/bankAppPhase2
mongoose.connect(
  "mongodb+srv://optimum-leads:12345@optimumbatch7-1rg4n.mongodb.net/bankappphase2?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.use(cors());

//body parser transposes request into language DB can understand
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

//From Ain: accept incoming change
//Routes
app.use("/users", userRoutes); //Using userRoutes file
app.use("/creditcard", creditcardRoutes); //using customerRoutes file
app.use("/approve",approveRoutes);
app.use("/deny",denyRoutes);
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
module.exports = app;
