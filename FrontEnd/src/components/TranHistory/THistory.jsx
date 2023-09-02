import React, { useState, useEffect, useContext } from 'react'
import SingleExpense from '../SingleExpense'
import { BsCalendar2Event } from 'react-icons/bs'
import axios from 'axios'
import { GlobalContext } from '../../Context/gobalContext'
const THistory = () => {
    const { setTotalExpense, totalExpense, expenses, setExpenses } = useContext(GlobalContext)

    useEffect(() => {
        const getFromDB = async () => {
            try {
                const token = JSON.parse(localStorage.getItem('token'));
                const response = await axios.get('http://localhost:3006/expenses/getExpenses', { headers: { "Authorization": token } })
                setExpenses(response.data.data);
                let sum = 0;
                response.data.data.forEach((item) => sum = sum + item.amount);
                setTotalExpense(sum);
            } catch (error) {
                console.log(error);
            }
        }
        getFromDB()
    }, []);



    const downloadCSV = async (e) => {
        e.preventDefault();
        try {
            const token = JSON.parse(localStorage.getItem('token'));
            let response = await axios.get('http://localhost:3006/expenses/downloadCSV', { headers: { "Authorization": token } });
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


    const ExpensesArr = expenses.map((expense) => {
        return <SingleExpense key={expense._id} amount={expense.amount} description={expense.description} userId={expense.userId} _id={expense._id} category={expense.category} date={expense.date} />
    })
    return (
        <div className='hidden  px-2 lg:flex bg-white shadow-lg  flex-col   w-[25%] max-h-[100%]  py-6 rounded-md text-base'>
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