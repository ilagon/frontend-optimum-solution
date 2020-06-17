const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const userRoutes = require('./routes/user_routes');
const creditcardRoutes = require('./routes/creditcard_routes');
const paymentHistoryRoutes = require('./routes/payment_history_routes');
const payeeRoutes = require('./routes/payee_routes');
const cors = require("cors");

const app = express();

const PORT = process.env.PORT || 9002;

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/bank_app_phase2_s4', {

useNewUrlParser: true,

useUnifiedTopology: true

});

app.use(cors());
//body parser setup
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//Routes
app.use("/users", userRoutes); //Using userRoutes file
app.use("/creditcards", creditcardRoutes);
app.use("/payment_history", paymentHistoryRoutes);
app.use("/payee", payeeRoutes);

app.get("/",(req,res) =>
    res.send(`Our application is running on port ${PORT}`)
)

app.listen(PORT, () => console.log(`Server is running in port: ${PORT}`));

module.exports = app;