
import React, { useState, useContext, useRef } from 'react'
import { GlobalContext } from '../Context/gobalContext';
import axios from 'axios';
import DatePicker from './DatePicker';

const ExpenseForm = () => {
   
    const {  setExpenses,amountRef,descriptionRef,categoryRef } = useContext(GlobalContext)
  
    const [type, setType] = useState('');
    const onChangeHandler = (e) => {
       
        setType(e.target.value)
    };

    let currDate = new Date();

    const formSubmitHandler = async (e) => {
        e.preventDefault();

        try {
            let obj = {
                amount: amountRef.current.value,
                description: descriptionRef.current.value,
                category: categoryRef.current.value,
                date: currDate,
                expenseType:type
            }
            

            amountRef.current.value = descriptionRef.current.value = categoryRef.current.value = "";
            const token = JSON.parse(localStorage.getItem('token'));
            const response = await axios.post('https://expensetracker-js97.onrender.com/expenses/addExpense', obj, { headers: { "Authorization": token } });

            setExpenses((state) => { return [...state, response.data.data] })


        } catch (error) {
            console.log(error);

        }
    }
    const currDateHandler = (date) => {
        currDate = date;
    }

    return (
        <div className=' md:w-[50%] max-w-[500px]    mx-auto  p-6  bg-white rounded-lg shadow-lg border'>
            <h1 className="text-3xl sm:text-5xl font-medium text-center text-gray-600 mt-8 mb-6">Expense Form</h1>
            <form onSubmit={formSubmitHandler} className=' min-h-[600px] flex flex-col  justify-evenly '>
                <div className="mb-4 w-full">
                    <label className="block mb-2 text-bse text-gray-700">DOB</label>
                    <input ref={amountRef} type="number" className="w-full px-4 py-2 border  rounded-lg ring-1 focus:outline-none focus:ring-2  text-center focus:ring-gray-600" required />
                </div>
                <div className="mb-4 w-full">
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
                <div className="mb-4 flex  gap-4">
                    <p className="block mb-2 text-sm text-gray-700">Expense Type :</p>
                    <>
                        <input onChange={onChangeHandler} type="radio" name="expenseType" value="Debit" />
                        <label >Debit</label>
                    
                        <input onChange={onChangeHandler} type="radio" name="expenseType" value="Credit" />
                        <label >Credit</label>
                    </>
                </div>

                <div className='flex justify-center'>
                    <DatePicker date={currDateHandler} />
                </div>
                <button type="submit" className="w-full bg-gradient-to-r from-cyan-500 to-cyan-800 text-white py-2 rounded-lg mx-auto block focus:outline-none active:ring-2  active:ring-offset-2 active:ring-cyan-500 mb-2">Add Expense</button>
            </form>
        </div>


    )
}

export default ExpenseForm