import Link from 'next/link'
import React from 'react'

export default function ServiceCard({data}) {

    const { title , slug ,documentId} = data; 
  return (
    <div className='w-full text-[#4B2615]  pb-[50px] border-b-1 border-[#97979780] '>
        <h2 className='my-[20px]'>{title}</h2>
        <Link className=' underline' href={`services/${slug || documentId}`}>Read More</Link>
    </div>
  )
}
