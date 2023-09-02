import React, { useState } from 'react'
import ExpenseLogo from "../../assets/expenseLogo.png"
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../ui/avatar"



const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className='flex  w-full items-center  justify-between  px-5 py-4 text-xl  text-gray-600 bg-white shadow-md' >

      <div className='flex gap-2  '>
        <img src={ExpenseLogo} alt="expenseLogo" className=' h-9 max-h-[40px] max-w-[40px]' />
        <p>Expense.io</p>
      </div>


      {/* moblile view */}
      <div className='flex gap-2 items-center'>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className='md:hidden'>
          <button onClick={() => setIsOpen((prevState) => !prevState)}><span>
            {!isOpen ? <GiHamburgerMenu /> :
              <AiOutlineClose />}
          </span></button>
        </div>
      </div>
    </nav>
  )
}

export default Header