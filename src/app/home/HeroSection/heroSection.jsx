import HeroSlider from '@/app/components/Sliders/heroSlider/heroSlider'
import { fetchHero } from '@/app/featchData/api';
import React from 'react'
export const revalidate = 60
export default async function HeroSection({ language  }) {


  const heroData = await fetchHero(language);

  const OPTIONS = { loop: true, duration: 30 }




  return (
    <section className='w-full h-[850px] relative top-[100%]  flex items-center justify-center bg-gray-100'>

      <div className='absolute overflow-hidden top-0 left-0 w-full h-full'>
        <HeroSlider slidesData={heroData.data.ContentHero} options={OPTIONS} />
        
        
      </div>




    </section>
  )
}
