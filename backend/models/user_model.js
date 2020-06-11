const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
      password: {
        type: String,
        required: true,
      },
      user_type: {
        type: String,
        enum: ["Admin", "Customer"],
        default: "Customer",
      },
})

module.exports = mongoose.model("User", UserSchema);