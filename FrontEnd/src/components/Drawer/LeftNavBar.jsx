import React from 'react'
import { LuLayoutDashboard } from 'react-icons/lu'
import { FaRegMoneyBillAlt } from 'react-icons/fa'
import { BsGraphUpArrow } from 'react-icons/bs'
import { FiSettings } from 'react-icons/fi'
import { FiHelpCircle } from 'react-icons/fi'
import { NavLink } from 'react-router-dom'
const LeftNavBar = () => {
   return (
      <div className=' hidden md:flex bg-white shadow-lg flex-col justify-between  pt-14  md:w-[25%] lg:w-[18%] min-h-[100%]  rounded-md p-4'>

         <div className=' flex flex-col gap-12'>

            <NavLink className="text-base flex items-center gap-6 outline-none  hover:ring-2 p-1 rounded-md ring-gray-300 " to="/dashboard">
               <span><LuLayoutDashboard className='text-3xl' /> </span>
               <span>Dashboard</span>
            </NavLink>


            <NavLink className="lg:hidden text-base flex items-center gap-6 outline-none hover:ring-2 p-1 rounded-md ring-gray-300 " to="/transaction-history">
               <span><FaRegMoneyBillAlt className='text-3xl' /> </span>
               <span>Transaction History</span>
            </NavLink>


            <NavLink className="text-base flex items-center gap-6 outline-none hover:ring-2 p-1 rounded-md ring-gray-300" to="/addExpense">
               <span><BsGraphUpArrow className='text-3xl' /> </span>
               <span>Add Expense</span>
            </NavLink>


            <NavLink className="text-base flex items-center gap-6 outline-none hover:ring-2 p-1 rounded-md ring-gray-300 " to="/settings">
               <span><FiSettings className='text-3xl' /> </span>
               <span>Settings</span>
            </NavLink>


            <NavLink className="text-base flex items-center gap-6 outline-none hover:ring-2 p-1 rounded-md ring-gray-300 " to="/help">
               <span><FiHelpCircle className='text-3xl' /> </span>
               <span>Get Help</span>
            </NavLink>


         </div>
         <div className='text-xs text-center'>
            <p>All Rights Reserved 2022-2023</p>
         </div>
      </div>

   )
}

export default LeftNavBar