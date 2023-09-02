import React from 'react'
import { MdFastfood } from 'react-icons/md'
import { LiaMoneyBillWaveSolid } from 'react-icons/lia'
import { TbMovie } from 'react-icons/tb'
import Dropdown from './Dropdown';
const SingleExpense = ({ amount, category, description, userId, _id, date }) => {
    const newdate = new Date(date);
    const year = newdate.getFullYear();
    const month = newdate.toLocaleString('default', { month: 'long' })
    const day = newdate.toLocaleString('default', { weekday: 'long' })
    const tempdate = newdate.getDate();

    return (
        <div className='border-b-2 flex justify-between md:px-1 lg:px-3 py-6 items-center '>
            <div className='flex items-center gap:2 lg:gap-6'>
                <div className=' text-2xl lg:text-3xl border p-1 bg-gray-100 rounded-md ring-2'>

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
                    <p className=' text-sm text-gray-400'> {tempdate}, {month} {year} {day}</p>
                </div>
            </div>
            <div className='flex gap-2'>
                <span className={`font-bold lg:text-xl ${amount >= 0 ? 'text-[#34a203]' : 'text-red-800'}`}>&#8377;{Math.abs(amount)}</span>
               <Dropdown/>
            </div>
        </div>
    );
};
export default SingleExpense