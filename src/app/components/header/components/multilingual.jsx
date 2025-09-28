'use client';

import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setLanguage } from '@/app/store/slices/appSlice';
import { useRouter, usePathname } from 'next/navigation';

export default function Multilingual() {
  const dispatch = useDispatch();
  const language = useSelector(state => state.app.language);
  const [currentParams, setCurrentParams] = useState('');

  const router = useRouter();
  const pathname = usePathname();


  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentParams(window.location.search);
    }
  }, []);

  const handleChange = (e) => {
    const newLang = e.target.value;
    dispatch(setLanguage(newLang));

    try {
  
      const params = new URLSearchParams(currentParams);
      params.set('lang', newLang);
      
      const newUrl = `${pathname}?${params.toString()}`;
      router.push(newUrl);
      
      
      setCurrentParams(`?${params.toString()}`);
    } catch (error) {
      console.warn('Failed to update URL params:', error);
     
      router.push(`${pathname}?lang=${newLang}`);
    }
  };

  return (
    <div>
      <select
        name="language"
        id="language"
        value={language}
        onChange={handleChange}
        className="
          bg-gray-800 text-white 
          rounded-lg px-3 py-2 
          cursor-pointer 
          border border-gray-600
          focus:outline-none focus:ring-2 focus:ring-yellow-400 
          hover:bg-gray-700 transition-colors duration-200
        "
      >
        <option value="en">EN</option>
        <option value="ar">AR</option>
      </select>
    </div>
  );
}