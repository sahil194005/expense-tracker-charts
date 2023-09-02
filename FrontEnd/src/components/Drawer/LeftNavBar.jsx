import React from 'react'
import { LuLayoutDashboard } from 'react-icons/lu'
import { FaRegMoneyBillAlt } from 'react-icons/fa'
import { BsGraphUpArrow } from 'react-icons/bs'
import { FiSettings } from 'react-icons/fi'
import { FiHelpCircle } from 'react-icons/fi'
import { NavLink } from 'react-router-dom'
const LeftNavBar = () => {
  return (
    <div className=' bg-white shadow-lg flex flex-col gap-6 md:gap-12 w-[25%] lg:w-[18%] min-h-[calc(100vh-120px)]  p-6 rounded-md'>


      <NavLink className="text-base flex items-center gap-6" to="/dashboard">
        <span><LuLayoutDashboard className='text-3xl' /> </span>
        <span>Dashboard</span>
      </NavLink>


      <NavLink className="text-base flex items-center gap-6" to="/bills">
        <span><FaRegMoneyBillAlt className='text-3xl' /> </span>
        <span>Bills & Payments</span>
      </NavLink>


      <NavLink className="text-base flex items-center gap-6" to="/addExpense">
        <span><BsGraphUpArrow className='text-3xl' /> </span>
        <span>Add Expense</span>
      </NavLink>


      <NavLink className="text-base flex items-center gap-6" to="/settings">
        <span><FiSettings className='text-3xl' /> </span>
        <span>Settings</span>
      </NavLink>


      <NavLink className="text-base flex items-center gap-6" to="/help">
        <span><FiHelpCircle className='text-3xl' /> </span>
        <span>Get Help</span>
      </NavLink>


    </div>
  )
}

export default LeftNavBar