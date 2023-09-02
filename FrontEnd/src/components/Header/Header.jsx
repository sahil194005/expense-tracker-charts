import React, { useState } from 'react'
import ExpenseLogo from "../../assets/expenseLogo.png"
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';

const links = [{
  name: "Need Help?",
  link: "/help"
},
{
  name: "Read Our Blog",
  link: "/blog"
  }
]


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className='flex  w-full items-center  justify-between  px-5 py-2 text-xl  text-gray-600 bg-white shadow-md   '>

      <div className='flex gap-2  '>
        <img src={ExpenseLogo} alt="expenseLogo" className=' h-9 max-h-[40px] max-w-[40px]' />
        <p>Expense.io</p>
      </div>

      <div className=' hidden md:flex gap-3  justify-evenly '>
        {
          links.map((item) => {
         return <NavLink key={item.name} to={item.link}>{ item.name}</NavLink>
          })
        }
      </div>



      {/* moblile view */}

      <div className='md:hidden'>

        <button onClick={() => setIsOpen((prevState) => !prevState)}><span>
          {!isOpen ? <GiHamburgerMenu /> :
            <AiOutlineClose />}
        </span></button>
      </div>
    </nav>
  )
}

export default Header