import Image from "next/image";
import React from "react";

export default function ClintCard({data}) {
  return (
    <div className=" py-6">


      
      <div className="flex flex-col md:flex-row gap-6 md:gap-[30px] mt-12">
   

<div className="w-[374px] h-[320px] bg-[#643F2E] flex items-end justify-center overflow-hidden ">
  <Image
    src={ data?.ClientsImg?.url ||`/avater.png`}
    alt="Team member"
    width={150}       
    height={150}      
    className="object-cover w-full "
  />
</div>




        <div className="flex flex-col justify-between w-[80%]">
          <p className="text-[18px] max-w-[800px] md:text-[24px] leading-[28px] md:leading-[40px] text-[#C9BEB9]">
            {data?.ClientsWords}
          </p>

          <div className="mt-4">
            <h3 className="font-semibold text-[20px] md:text-[24px] leading-[36px] md:leading-[45px]">
              {data?.ClientName}
            </h3>
            <span className="font-normal text-[14px] md:text-[16px] leading-[100%] text-gray-400">
              {data.ClientPosition}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
