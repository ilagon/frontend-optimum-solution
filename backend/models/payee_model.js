const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PayeeSchema = new Schema ({
      _id: Schema.Types.ObjectId,
    
      name: {
        type: String,
      },

      number:{
        type: Number,
        required: true,
      },

      payee_type:{
        type:String,
        enum: ["Transfer","MobileBill","PayTax"],
        default:"None"
      },

      user:{
        type:Schema.Types.ObjectId,
        ref:"User",
        require:true,
      }
})

module.exports = mongoose.model("Payee", PayeeSchema);