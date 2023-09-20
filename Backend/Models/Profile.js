
const mongoose = require("mongoose");
mongoose.set('strictQuery', true)
const ProfileSchema = new mongoose.Schema({
    userId: {
        type:mongoose.Types.ObjectId
    },
    dob: {
        type:Date,
    },
    panNo: {
      type:Number  
    },
    phoneNumber: {
      type:Number  
    }
});

module.exports = mongoose.model("profile", ProfileSchema);
