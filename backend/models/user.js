const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//added address and contact number
const UserSchema = new Schema ({
    _id: Schema.Types.ObjectId,
    account_status: {
        type: String,
        enum: ["Pending", "Active", "Inactive"],
        default: "Pending",
      },
      name: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      address:{
        type: String,
        required:true,
      },
      contact:{
        type:Number,
        required:true
      },
      password: {
        type: String,
        required: true,
      },
      is_admin: {
        type: Boolean,
        default: false,
      },
})

module.exports = mongoose.model("User", UserSchema);