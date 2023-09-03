import React, { useState, useRef,useEffect } from 'react'
import ExpenseLogo from "../../assets/expenseLogo.png"
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
import { LuLayoutDashboard } from 'react-icons/lu'
import { FaRegMoneyBillAlt } from 'react-icons/fa'
import { BsGraphUpArrow } from 'react-icons/bs'
import { FiSettings } from 'react-icons/fi'
import { FiHelpCircle } from 'react-icons/fi'
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../ui/avatar"

const LinksArr = [
  {
    label: "Dashboard",
    link: "/dashboard",
    icon: <LuLayoutDashboard />
  },
  {
    label: "Transaction History",
    link: "/transaction-history",
    icon: <FaRegMoneyBillAlt />
  },
  {
    label: "Add Expense",
    link: "/add-expense",
    icon: <BsGraphUpArrow />
  },
  {
    label: "Settings",
    link: "/settings",
    icon: <FiSettings />
  },
  {
    label: "Read Our Blog",
    link: "/blog",
    icon: <FiHelpCircle />
  }

]


const Header = () => {

  const navDrawerRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    function handleClickOutside(event) {
      if (navDrawerRef.current && !navDrawerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);


  return (
    <nav className=' flex   w-full items-center  justify-between  px-5 py-4 text-xl  text-gray-600 bg-white shadow-md' >

      <div className='flex gap-2  '>
        <img src={ExpenseLogo} alt="expenseLogo" className=' h-9 max-h-[40px] max-w-[40px]' />
        <p>Expense.io</p>
      </div>


      {/* Mobile SideBar */}
      {isOpen && <div ref={navDrawerRef} className='flex flex-col border gap-6 p-6 absolute right-0 top-[70px] bg-white w-[70%] sm:w-[50%] h-[calc(100vh-70px)] z-30 duration-300'>
        {LinksArr.map((item) => {
          return <NavLink key={item.link} to={item.link}   onClick={() => setIsOpen(false)} className="text-base flex items-center gap-6 outline-none  hover:ring-2 p-1 rounded-md ring-gray-300 ">
            <span>{item.icon}</span>
            <span>{item.label}</span>
          </NavLink>
        })}
      </div>
      }

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