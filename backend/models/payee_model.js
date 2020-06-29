const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PayeeSchema = new Schema({
  _id: Schema.Types.ObjectId,

  name: {
    type: String,
    required: true,
  },

  number: {
    type: Number,
    required: true,
  },

  payee_type: {
    type: String,
    enum: ["Transfer", "MobileBill", "PayTax"],
    default: "None",
  },

  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    require: true,
  },

  creditcard: {
    type: Schema.Types.ObjectId,
    ref: "CreditCard",
    require: true,
  },
});

module.exports = mongoose.model("Payee", PayeeSchema);
