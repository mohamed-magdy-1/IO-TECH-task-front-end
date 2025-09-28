import Image from "next/image";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";
import ServiceCard from "./components/serviceCard";
import { api, fetchService } from '@/app/featchData/api'; 
import Pagination from "../components/pagination/pagination";


export default async function Page({ searchParams }) {




  const language = searchParams?.lang || 'en';
  const pageIndex = searchParams?.page || 1;
  const Service = await fetchService(language,pageIndex);
  let data = Service.data


console.log(searchParams?.page);

  return (
    <section>
      <div className="relative w-[100%] h-[850px]">
        <Image
          src="/HeroSectionImage.jpg"
          fill
          priority
          alt="Hero Image"
          className="object-cover grayscale"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#4b26158f] to-[#4B261547]"></div>
      </div>

      <div style={{direction: language === "en" ? "ltr" : "rtl"}} className="flex  px-[20px] mt-[40px] justify-start gap-[20px] items-start">
        <div className="w-[200px] h-[400px] flex flex-col items-center pt-5 gap-3 bg-[#FAFAFA]">
          <Link className="font-inter font-semibold text-[#4B2615] text-[20px] leading-[20px]" href={"#"}>Team</Link>
          <Link className="font-inter font-semibold text-[#4B2615] text-[20px] leading-[20px]" href={"#"}>Services</Link>
          <Link className="font-inter font-semibold text-[#4B2615] text-[20px] leading-[20px]" href={"#"}>Blog</Link>
        </div>

        <div className="w-[80%]">
          <Link href={"/"} className="w-full flex justify-start items-center gap-1">
            <IoIosArrowBack /> Back
          </Link>

          <div>
            {data.length === 0 && <p>No services found</p>}
            {data.map((item) => (
              <ServiceCard key={item.id} data={item} />
            ))}
          </div>
          <Pagination meta={Service.meta}/>
        </div>
      </div>
    </section>
  );
}
