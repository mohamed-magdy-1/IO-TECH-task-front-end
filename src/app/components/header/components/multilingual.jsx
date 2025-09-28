'use client';

import { useSelector, useDispatch } from 'react-redux';
import { setLanguage } from '@/app/store/slices/appSlice';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';

export default function Multilingual() {
  const dispatch = useDispatch();
  const language = useSelector(state => state.app.language);


  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleChange = (e) => {
    const newLang = e.target.value;
    dispatch(setLanguage(newLang));


    const params = new URLSearchParams(searchParams);
    params.set('lang', newLang ||params.toString());

    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div>
      <select
        name="language"
        id="language"
        value={language}
        onChange={handleChange}
        className='bg-transparent outline-none border-none text-white rounded px-2 py-1 cursor-pointer'
      >
        <option value="en">EN</option>
        <option value="ar">AR</option>
      </select>
    </div>
  );
}
