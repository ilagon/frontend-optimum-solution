const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CreditCardSchema = new Schema ({
      _id: Schema.Types.ObjectId,
      creditcard_num: {
        type: Number,
        unique: true
      },
      creditcard_status: {
        type: String,
        enum: ["Pending", "Approved", "Rejected"],
        default:"Pending"
      },
      creditcard_limit: {
        type: Number,
        default: 0.0  
      },
      creditcard_balance:{
         type:Number,
         default:0.0
      },
      creditcard_type:{
        type:String,
        enum: ["Platinum","Gold","Silver","Women","Student"],
        default:"None"
      },
      user:{
        type:Schema.Types.ObjectId,
        ref:"User",
        require:true,
      }

})

module.exports = mongoose.model("CreditCard", CreditCardSchema);