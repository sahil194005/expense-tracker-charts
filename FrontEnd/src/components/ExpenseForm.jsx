
import React, { useState, useContext } from 'react'
import { GlobalContext } from '../Context/gobalContext';
import axios from 'axios';

const ExpenseForm = () => {
    const { amountRef,
        descriptionRef,
        categoryRef, expenses, setExpenses } = useContext(GlobalContext)
    const formSubmitHandler = async (e) => {
        e.preventDefault();
        const date = Date.now();
        try {
            let obj = {
                amount: amountRef.current.value,
                description: descriptionRef.current.value,
                category: categoryRef.current.value,
                date: date
            }
            console.log(obj);
            amountRef.current.value = descriptionRef.current.value = categoryRef.current.value = "";
            const token = JSON.parse(localStorage.getItem('token'));
            const response = await axios.post('http://localhost:3006/expenses/addExpense', obj, { headers: { "Authorization": token } });
            setExpenses((state) => { return [...state, obj] })


        } catch (error) {
            console.log(error);

        }
    }
   
    return (
        <div className=" md:min-w-[500px]   flex items-center justify-center">
           
            <div className='  w-full min-h-[700px]  p-6 bg-white rounded-lg shadow-lg border'>
                <h1 className="text-5xl font-medium text-center text-gray-600 mt-8 mb-6">Expense Form</h1>
                <form onSubmit={formSubmitHandler} className=' min-h-[500px] flex flex-col justify-evenly'>
                    <div className="mb-4">
                        <label className="block mb-2 text-bse text-gray-700">Expense Amount</label>
                        <input ref={amountRef} type="number" className="w-full px-4 py-2 border  rounded-lg ring-1 focus:outline-none focus:ring-2  text-center focus:ring-gray-600" required />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2 text-sm text-gray-700">Description</label>
                        <input type="text" ref={descriptionRef} className="w-full px-4 py-2 border ring-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600 text-center" required />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2 text-sm text-gray-700">Category</label>
                        <select ref={categoryRef} className="w-full px-4 py-2 border ring-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600 text-center" required >
                            <option defaultValue>Foods & Drinks</option>
                            <option value="Bills & Payments">Bills & Payments</option>
                            <option value="Entertainment">Entertainment</option>
                        </select>
                    </div>
                    <button type="submit" className="w-full bg-gradient-to-r from-cyan-500 to-cyan-800 text-white py-2 rounded-lg mx-auto block focus:outline-none active:ring-2  active:ring-offset-2 active:ring-cyan-500 mb-2">Add Expense</button>
                </form>
            </div>
        </div>

    )
}

export default ExpenseForm