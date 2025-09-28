import React from 'react';

import Link from 'next/link';
import { FaFacebookF, FaGooglePlusG, FaTwitter } from "react-icons/fa";
import LinksFooter from './components/LinksFooter';
import SubscriberInput from './components/SubscriberInput';
import { fetchFooter } from '@/app/featchData/api';
export const revalidate = 60
export default async function Footer() {
  const FooterData = await fetchFooter();




  return (
    <footer className="w-full py-12 px-5 md:px-16 bg-[#4B2615] mt-5">
    
      <div className="flex flex-col md:flex-row items-end justify-between gap-8 md:gap-10">
        <div className="flex justify-end flex-1 ">
          <SubscriberInput />
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-end gap-4 md:gap-10 text-white">
          <Link
            className="font-normal text-[16px] leading-[26px] hover:underline"
            href="/"
          >
            Contacts
          </Link>

          <div className="flex gap-3 text-[18px]">
            <FaTwitter />
            <FaFacebookF />
            <FaGooglePlusG />
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center pt-5 border-t-2 border-white/40 mt-5 gap-4 md:gap-0">
        <div className="w-full md:w-[600px]">
          <LinksFooter footerLinks={FooterData?.data?.footerLinks} />
        </div>

        <div className="w-full text-center  md:w-[200px] text-white font-normal text-[16px] leading-[26px] md:text-right">
          ©{new Date().getFullYear()}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
