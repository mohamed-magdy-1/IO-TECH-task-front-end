"use client"
import React from 'react'
import { useSelector } from 'react-redux';

export default function Button() {
   const language = useSelector(state => state.app.language);
  return (
    <button className='w-[130px]  max-[1100px]:hidden flex justify-center items-center h-[40px] py-2 px-2 text-[12px] font-[500] border border-gray-300 rounded-lg text-white  cursor-pointer'>
        {language === "en" ? " Book Appointment" : "حجز موعد "}
    </button>
  )
}
