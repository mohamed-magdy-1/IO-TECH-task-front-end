import ClientSlider from '@/app/components/Sliders/clientSlider/clientSlider'
import { fetchClients, fetchWhatOurClientsSay } from '@/app/featchData/api';
import React from 'react'

export const revalidate = 60
export default async function ClientsComments({language}) {


  const WhatOurClientsSayData = await fetchWhatOurClientsSay(language);
  const ClientsData = await fetchClients(language);
  const OPTIONS = { loop: false }


  return (
    <section  className='bg-[#4B2615] text-white py-10 px-5 md:px-20'>
      <h2 style={{direction: language === "en" ? "ltr" : "rtl"}} className='text-3xl font-bold mb-[20px]'>{WhatOurClientsSayData?.data?.title}</h2>
      
            <div style={{direction: language === "en" ? "ltr" : "rtl"}}>
              <p className="text-[16px] md:text-[18px] leading-[150%] text-[#C9BEB9] max-w-full md:max-w-[579px]">
                  {WhatOurClientsSayData?.data?.description}
              </p>
            </div>
      <div className='flex flex-col '>
        <ClientSlider data={ClientsData.data} options={OPTIONS} />
      </div>
    </section>
  )
}
