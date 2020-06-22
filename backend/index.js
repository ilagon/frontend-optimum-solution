
//import express from "express"

//express is basically a framework/server
const express = require("express")
const bodyparser = require('body-parser');
const mongoose = require("mongoose")
const userRoutes = require("./routes/userRoutes")
const customerRoutes = require("./routes/customerRoutes")
const cors = require("cors")

const app = express();
const PORT = process.env.PORT || 7001;
//mongo connection - mongoose is a library to simplify syntax to mongo DB
mongoose.Promise = global.Promise; // gets a response from DB fail or success

//"mongodb+srv://optimum-leads:12345@optimumbatch7-1rg4n.mongodb.net/bankappphase2?retryWrites=true&w=majority"
//connect to the schema
//mongodb://localhost/bankAppPhase2
mongoose.connect("mongodb+srv://optimum-leads:12345@optimumbatch7-1rg4n.mongodb.net/bankappphase2?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(cors());

//body parser transposes request into language DB can understand
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())

//routes
app.use("/users", userRoutes);
app.use("/customer", customerRoutes);
//either deploy on server or local port

app.get("/", (req, res) => { res.send(`Application is running on ${PORT}`) })
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

module.exports = app;









