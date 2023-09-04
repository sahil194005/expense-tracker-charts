const ExpenseSchema = require("../Models/Expenses");
const CsvParser = require("json2csv").Parser;

const addExpense = async (req, res) => {
	try {
		const response = await ExpenseSchema.create({
			...req.body,
			userId: req.User._id,
		});
		res.status(201).json({
			msg: "expense Added",
			success: true,
			data: response,
		});
	} catch (error) {
		console.log(error);
		res.status(404).json({
			msg: "could not add expense",
			success: false,
		});
	}
};

const getExpenses = async (req, res) => {
	try {
		const response = await ExpenseSchema.find({
			userId: req.User._id,
		});
		res.status(201).json({
			msg: "Fetched Expenses",
			success: "true",
			data: response,
		});
	} catch (error) {
		console.log(error);
		res.status(404).json({
			msg: "could not get expenses",
			success: false,
		});
	}
};

const deleteExpense = async (req, res) => {
	try {
		const { id } = req.params;
		const response = await ExpenseSchema.findOneAndDelete({
			_id: id,
		});
		res
			.status(201)
			.json({ msg: "expense deleted", success: true });
	} catch (error) {
		console.log(error);
		res.status(404).json({
			msg: "could not delete expense",
			success: false,
		});
	}
};

const downloadCSV = async (req, res) => {
	try {
		const userExpenses = await ExpenseSchema.find({
			userId: req.User._id,
		});
		let ExpensesArr = [];
		userExpenses.forEach((expense) => {
			const { amount, description, category } = expense;
			ExpensesArr.push({ amount, description, category });
		});
		const csvFields = ["Amount", "Description", "Category"];
		const csvParser = new CsvParser({ csvFields });
		const csvData = csvParser.parse(ExpensesArr);
		res.setHeader("Content-Type", "text/csv");
		res.setHeader(
			"Content-Disposition",
			"attatchment:filename=usersExpenses.csv"
		);
		res.status(201).end(csvData);
	} catch (error) {
		console.log(error);
		res.status(400).json({ success: false, msg: error });
	}
};

function transformExpensesToChartData(expenses) {
	// Initialize the transformed data structure with empty arrays for each category
	const transformedData = [
		{ id: "Foods & Drinks", data: [] },
		{ id: "Entertainment", data: [] },
		{ id: "Bills & Payments", data: [] },
	];

	// Initialize an object to store monthly totals for each category
	const monthlyTotals = {
		"Foods & Drinks": Array(12).fill(0),
		Entertainment: Array(12).fill(0),
		"Bills & Payments": Array(12).fill(0),
	};

	// Loop through expenses and update monthly totals
	expenses.forEach((expense) => {
		const { category, amount, date } = expense;
		const month = new Date(date).getMonth(); // Get the month (0-11)

		// Update the monthly total for the category
		monthlyTotals[category][month] += amount;
	});

	// Fill in missing months with zero values
	Object.keys(monthlyTotals).forEach((category) => {
		for (let i = 0; i < 12; i++) {
			transformedData
				.find((data) => data.id === category)
				.data.push({
					x: i + 1,
					y: monthlyTotals[category][i],
				});
		}
	});

	return transformedData;
}

const lineGraphData = async (req, res) => {
	try {
		const expenses = await ExpenseSchema.find({
			userId: req.User._id,
		});
		let a = transformExpensesToChartData(expenses);
		res
			.status(201)
			.json({ msg: "expense deleted", success: true,data:a });
	} catch (error) {
		console.log(error);
		res.status(400).json({ success: false, msg: error });
	}
};

module.exports = {
	addExpense,
	getExpenses,
	deleteExpense,
	downloadCSV,
	lineGraphData,
};
