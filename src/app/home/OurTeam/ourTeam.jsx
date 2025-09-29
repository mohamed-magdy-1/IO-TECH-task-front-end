import TeamSlide from "@/app/components/Sliders/teamSlide/teamSlide";
import { fetchOurTeam, fetchTeam } from "@/app/featchData/api";
import React from "react";
export const revalidate = 60
export default async function OurTeam({language}) {

  const OurTeamData = await fetchOurTeam(language);
  const TeamData = await fetchTeam(language);


  const OPTIONS = { loop: true };

  return (
    <section className="text-2xl max-w-[1200px] mx-auto my-[110px] px-4 md:px-8 font-bold">
      
      <div className="mb-[50px] flex flex-col items-center justify-center">
        <h2 className="text-[32px] md:text-[42px] tracking-[-0.4px] text-[#4B2615] text-center font-bold">
          {OurTeamData?.data?.title}
        </h2>
        <p className="text-[#1E1E1E] text-center text-[16px] md:text-[18px] leading-[24px] md:leading-[28px] mt-5 max-w-[90%] md:max-w-[80%]">
          {OurTeamData?.data?.description}
        </p>
      </div>

    
      <div>
        <TeamSlide data={TeamData.data} options={OPTIONS} />
      </div>
    </section>
  );
}
