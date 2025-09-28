import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Logo() {
  return (
    <Link href='/' className='inline-block w-[100px] h-[50px] sm:w-[180px] sm:h-[80px] relative'>
      <Image 
        src='/logo.png' 
        alt='Logo' 
        fill 
        className='object-contain' 
      />
    </Link>
  )
}
