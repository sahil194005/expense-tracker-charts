import React from 'react'
import { MdFastfood } from 'react-icons/md'
import { LiaMoneyBillWaveSolid } from 'react-icons/lia'
import { TbMovie } from 'react-icons/tb'
import Dropdown from './Dropdown';
const SingleExpense = ({ amount, category, description, userId, _id, date }) => {
    const newdate = new Date(date);

    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    
    const formattedDate = newdate.toLocaleDateString('en-US', options);
    return (
        <div className='border-b-2 flex justify-between sm:px-6 py-6 items-center '>
            <div className='flex items-center gap-4'>
                <div className='hidden sm:block text-2xl lg:text-3xl border p-1 bg-gray-100 rounded-md ring-2'>

                    {category === "Foods & Drinks" ? (
                        <MdFastfood />
                    ) : category === "Bills & Payments" ? (
                        <LiaMoneyBillWaveSolid />
                    ) : (
                        <TbMovie />
                    )}
                </div>

                <div className='flex flex-col gap-1'>
                    <p className='font-bold text-sm text-gray-800'>{description.toUpperCase()}</p>
                    <p className=' text-sm text-gray-400'> { formattedDate}</p>
                </div>
            </div>
            <div className='flex gap-2'>
                <span className={`font-bold lg:text-xl ${amount >= 0 ? 'text-[#34a203]' : 'text-red-800'}`}>&#8377;{Math.abs(amount)}</span>
                <Dropdown />
            </div>
        </div>
    );
};
export default SingleExpense