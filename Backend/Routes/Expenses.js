const express = require('express');
const { addExpense,lineGraphData ,getExpenses,deleteExpense,downloadCSV} = require('../Controller/Expenses')
const AuthUser = require('../Auth/AuthUser')
const router = express.Router();

router.route('/addExpense').post(AuthUser, addExpense);
router.route('/getExpenses').get(AuthUser, getExpenses);
router.route('/lineGraphData').get(AuthUser,lineGraphData);
router.route('/deleteExpense/:id').delete(AuthUser, deleteExpense)
router.route('/downloadCSV').get(AuthUser,downloadCSV)
module.exports = router;