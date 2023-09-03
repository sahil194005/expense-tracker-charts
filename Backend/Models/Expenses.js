
const mongoose = require("mongoose");
mongoose.set('strictQuery', true)
const ExpenseSchema = new mongoose.Schema({
    amount: {
        type: Number,
    },
    description: {
        type: String,
    },
	category: {
		type: String,
    },
    userId: {
        type:mongoose.Types.ObjectId
    },
    date: {
        type:Date,
    }
});

module.exports = mongoose.model("expenses", ExpenseSchema);
