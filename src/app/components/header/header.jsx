import React from 'react'
import Button from './components/button'
import Multilingual from './components/multilingual'
import Search from './components/search'
import Logo from './components/logo'
import MainLinks from './components/mainLinks'
import BurgerMenu from './components/burgerMenu'
import { fetchHeader } from '@/app/featchData/api'
export const revalidate = 60
export default async function Header({ params }) {
  const resolvedParams = await params;
  const language = resolvedParams?.lang;
  const headerData = await fetchHeader(language);

  return (
    <header  className='w-[96%]  absolute z-10 flex justify-between items-center'>
      <div className='select-none'><Logo /></div>

      <div className='w-fit h-full flex  justify-center items-center'>
        
        <MainLinks LinkHeader={headerData?.data?.LinkHeader} />
      </div>

      <div className='flex gap-0 relative left-[-15px] items-center'>
        {/* <BurgerMenu /> */}
        
        <Search />
        <Multilingual />
        <Button />
      </div>
    </header>
  )
}
