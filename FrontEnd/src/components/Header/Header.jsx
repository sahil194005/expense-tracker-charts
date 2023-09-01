import React from 'react'
import ExpenseLogo from "../../assets/expenseLogo.png"
const Header = () => {
  return (
    <div className='flex  px-5 py-2 text-xl   text-gray-600 bg-white shadow-md h-[70px]  '>

      <div className='flex gap-2 flex-grow '>
        <img src={ExpenseLogo} alt="expenseLogo" className=' h-9 max-h-[40px] max-w-[40px]' />
        <p>Expense.io</p>
      </div>

      <div className='flex gap-3 flex-1 justify-evenly '>
        <p>Need Help ?</p>
        <p>Read Our Blog</p>
      </div>
    </div>
  )
}

export default Header