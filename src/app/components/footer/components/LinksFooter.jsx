"use client"

import { fetchFooter } from '@/app/featchData/api';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import Link from 'next/link'

export default function LinksFooter({footerLinks}) {
  const [footerData, setFooterData] = useState(footerLinks || []);
  const language = useSelector(state => state.app.language);
  
  useEffect(() => {
    const getFooter = async () => {
      try {
        const res = await fetchFooter(language);
        const newData = res?.data?.footerLinks || [];
        setFooterData(newData);
        console.log("Footer data:", newData);
      } catch (error) {
        console.error("Error fetching footer data:", error);
        setFooterData(footerLinks || []);
      }
    };
    
    if (language) {
      getFooter();
    }
  }, [language, footerLinks]);

  return (
    <>
      <ul className='text-[12px] md:text-[16px] flex md:flex-col lg:flex-row justify-between items-center gap-[10px] text-white cursor-pointer capitalize'>
{
      footerData.map((item) => (
        <li key={item.id || item.name} className='group w-max relative overflow-hidden'>
          <Link 
            href={item.url || item.Url || "#"} 
            className='block px-3 py-2 rounded-lg transition-all duration-300   transform hover:scale-105 relative z-10'
          >
            {item.name}
            <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full'></span>
          </Link>
        </li>
      ))
}

    
      </ul>
    </>
  )
}