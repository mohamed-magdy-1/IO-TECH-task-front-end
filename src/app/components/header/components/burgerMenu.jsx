"use client"

import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import Link from 'next/link';
export default function BurgerMenu({language,isOpen,setIsOpen,headerData}) {

  return (
          <div className='flex min-[1100px]:hidden absolute right-[-20px] text-white text-2xl cursor-pointer'>
        <div onClick={() => setIsOpen(prev => !prev)}>
          <RxHamburgerMenu />
        </div>
       
        <div className={`${isOpen ? "translate-x-0" : "translate-x-full"}  z-10 list-none transition-transform duration-300 fixed w-[300px] h-[100vh] top-0 right-0 bg-[#4b2615f0]`}>
          <div className="p-[10px]" onClick={() => setIsOpen(prev => !prev)}>
            <IoClose />
          </div>
          
<ul className="flex flex-col items-center gap-[30px] pt-5">
  {headerData.map(item => (
    <li key={item.id}>
      <Link 
        className={`
          ${item?.name === "Services" ? "flex justify-center items-center gap-2" : ""}
          text-white 
          px-4 py-2 
          rounded 
          w-full  text-center
          transition-colors duration-200 
          hover:bg-gray-700 
          hover:text-white
        `} 
        href={item.Url || "#"}
      >
        {item?.name}
      </Link>
    </li>
  ))}
  <li className='rounded-[5px] p-[15px] border cursor-pointer hover:bg-[#4B2615] hover:text-white transition-colors duration-200'>
    {language === "en" ? "Book Appointment" : "حجز موعد"}
  </li>
</ul>

        </div>
      </div>
  )
}
