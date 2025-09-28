
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";
import ServiceBlog from "./components/ServiceBlog";


export default async function Page({ params }) {
  const { serviceSlug,lang} = params;
  
  const res = await fetch(`http://localhost:1337/api/services/${serviceSlug}?locale=${lang}`);
  const data = await res.json();

  return (
    <section>
      <div className="relative w-full h-[850px]">
        <Image
          src="/HeroSectionImage.jpg"
          fill
          priority
          alt="Hero Image"
          className="object-cover grayscale"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#4b26158f] to-[#4B261547]"></div>
      </div>

    
      <div className={`flex p-5 mt-[40px] justify-start gap-[20px] items-start`}>

        <div className=" md:!w-[900px] custom-container m-auto">
          <Link href={"/"} className="w-full flex justify-start items-center gap-1">
            <IoIosArrowBack /> Back
          </Link>

          <div className="mt-[50px]">
            <ServiceBlog data={data.data} />
          </div>
        </div>
      </div>
    </section>
  );
}

