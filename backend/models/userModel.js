const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    //created whenever u post and object
    _id: Schema.Types.ObjectId,
    //this is the stuff in the schema
    account_status: {
        type: String,
        enum: ["Pending", "Active", "Inactive"],
        default: "Pending"
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    is_admin: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model("User", UserSchema)