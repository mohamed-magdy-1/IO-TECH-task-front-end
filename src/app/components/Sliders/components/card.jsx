import Image from 'next/image';
import React from 'react'
import { LiaPhoneVolumeSolid } from "react-icons/lia";
import { MdOutlineMail , MdOutlineWhatsapp } from "react-icons/md";

export default function Card({item}) {
  return (
    <>
            <div key={item.id} className='card flex flex-col gap-4 p-4'>
                <div className='w-[271px] h-[184] bg-[#643F2E] overflow-hidden  flex items-center justify-center'>
                <Image src={item?.ProfilePicture?.url ||`/avater.png`} 
                alt={`Team name ${item?.name}`} 
                width={150}
                height={150}
                
                className="w-full h-auto rounded-lg"/>
                </div>

                <div>
                    <h3 className='text-center font-medium text-[22px]  leading-[32px] text-[#4B2615] text-lg'>{item.name}</h3>
                    <h4 className='text-sm text-[#15143966]  text-[14px] uppercase tracking-[2px] text-center leading-[26px] font-bold '>{item.positon}</h4>
                    <div className='flex items-center justify-center gap-4 text-[#000000] text-[20px] mt-2'>
                        <MdOutlineWhatsapp />
                        <LiaPhoneVolumeSolid/>
                        <MdOutlineMail/>
                    </div>
                </div>


            </div>
    </>
  )
}
