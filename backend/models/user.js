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
      is_admin: {
        type: Boolean,
        default: false,
      },
})

<<<<<<< HEAD
module.exports = mongoose.model("User", UserSchema);
// test
=======
module.exports = mongoose.model("User", UserSchema);
>>>>>>> 471cc9d1dc2c72299fc25b42ed08e78e066fcf40
