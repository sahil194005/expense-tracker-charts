import React, { useState, useEffect, useContext } from 'react'
import SingleExpense from '../SingleExpense'
import { BsCalendar2Event } from 'react-icons/bs'
import axios from 'axios'
import { GlobalContext } from '../../Context/gobalContext'
const THistory = () => {
    const { setTotalExpense, totalExpense, expenses, setExpenses } = useContext(GlobalContext)

    const downloadCSV = async (e) => {
        e.preventDefault();
        try {
            const token = JSON.parse(localStorage.getItem('token'));
            let response = await axios.get('https://expensetracker-js97.onrender.com/expenses/downloadCSV', { headers: { "Authorization": token } });
            const blob = new Blob([response.data], { type: 'text/csv' });
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'usersData.csv');
            document.body.appendChild(link);
            link.click()

        } catch (error) {
            console.log(error);
        }

    }

    console.log(expenses)
    const ExpensesArr = expenses.map((expense) => {
        return <SingleExpense key={expense._id} amount={expense.amount} description={expense.description} userId={expense.userId} _id={expense._id} category={expense.category} date={expense.date} expenseType={expense.expenseType} />
    })
    return (
        <div className='  px-2  bg-white shadow-lg flex flex-col w-full max-h-[100%]  py-6 rounded-md text-base'>
            <div className='flex justify-center items-center gap-5 pb-6 px-2 lg:px-6 border-b-2'>
                <span className='text-3xl'>
                    <BsCalendar2Event />
                </span>
                <p className='text-center '>Your Transaction History</p>
            </div>
            <div>
                {ExpensesArr}
            </div>
        </div>


    )
}

export default THistory