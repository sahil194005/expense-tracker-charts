import React, { useEffect, useRef, useState } from 'react'
import { AiOutlineDelete } from 'react-icons/ai'

const Dropdown = ({ deleteHandler}) => {

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const menuOpenHandler = () => {
    setIsOpen((prevState) => !prevState);
  }

  const closeMenu = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };
  useEffect(() => {
    document.addEventListener('mousedown', closeMenu);
    return () => {
      document.removeEventListener('mousedown', closeMenu);
    };
  }, []);
  return (
    <div className='relative' ref={dropdownRef}>
      <button className='text-lg font-bold  ' onClick={menuOpenHandler}>
        &#10247;
      </button>
      {isOpen && <div className=' absolute right-0 z-30   border shadow-xl flex flex-col  bg-white min-w-[150px] rounded-lg  '>
        <button onClick={() => { deleteHandler(); setIsOpen(!isOpen) }} className='flex justify-between p-2  hover:ring-2 rounded-md '>
          <span><AiOutlineDelete /></span>
          <span>Delete</span>
        </button>
      </div>}
    </div>
  )
}

export default Dropdown