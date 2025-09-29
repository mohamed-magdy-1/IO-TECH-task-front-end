"use client";

import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";

export default function HeroContent({ data ,videoRef }) {
 const language = useSelector(state => state.app.language);
  return (
    <div style={{direction: language === "en" ? "ltr" : "rtl"}} className="  relative w-80% h-[100%] flex justify-center items-center overflow-hidden">
      
     
      <div className="absolute top-0 left-0 w-full h-full">

        {data?.mainImage[0]?.provider_metadata?.resource_type === "image" ? (
  <Image
    src={data?.mainImage[0]?.url}
    alt="Background"
    fill
    quality={100}
    className="object-cover"
  />
) : (
  <video
  ref={videoRef}
    src={data?.mainImage[0]?.url}
    autoPlay
    muted
    loop
    className="w-full h-full object-cover"
  />
)}

       
        <div   style={{
    background: "linear-gradient(271.47deg, rgba(75, 38, 21, 0.28) 1.2%, rgba(75, 38, 21, 0.68) 86.38%)"
  }} className="absolute top-0 left-0 w-full h-full" />
      </div>

    
      <div className="relative z-10 max-w-[1200px]  px-4 md:px-8 flex flex-col md:flex-row items-center md:justify-around gap-8">
        
    
        <div className={`flex-1 text-center ${language === "en" ? "md:text-left" : "md:text-right"}`}>
          <h1 className="font-dmSans font-bold text-white text-[28px] md:text-[38px] leading-[32px] md:leading-[44px] mb-4">
            {data?.title}
          </h1>
          <p className="font-dmSans mt-[20px] !w-full font-medium text-white text-[16px] md:text-[18px] leading-[24px] md:leading-[28px]  mx-auto md:mx-0">
            {data?.description}
          </p>

          <button className=" hover:scale-[1.1] cursor-pointer  transition-transform duration-200 bg-white rounded-[12px] mt-[20px] md:mt-[80px] text-[#4B2615] w-[161px] h-[60px] font-dmSans font-medium text-[18px] leading-[26px]  text-center align-middle">
            {language == "en" ?  "Read More" : "اقرء المذيد"}
          </button>
          


        </div>


        <div className="flex-shrink-0 w-[274px] h-[274px] md:w-[374px]  md:h-[374px] bg-[#643F2E] flex items-end justify-center overflow-hidden rounded-lg">
          <Image
            src={data?.imgContent?.url || "/avater.png"}
            alt="Team member"
            width={150}
            height={150}
            className="object-cover w-full h-auto"
            decoding="async"
            fetchpriority="high"
          />
        </div>

      </div>
    </div>
  );
}
