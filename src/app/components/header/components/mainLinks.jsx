"use client"
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { fetchHeader, fetchServiceHeader } from "@/app/featchData/api";
import { IoIosArrowUp } from "react-icons/io";
import Link from "next/link";

import BurgerMenu from "./burgerMenu";
export default function MainLinks({ LinkHeader }) {
  const language = useSelector(state => state.app.language);
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesHovered, setIsServicesHovered] = useState(false);
  const [headerData, setHeaderData] = useState(LinkHeader || []);
  const [serviceHeaderData, setServiceHeaderData] = useState([]);
  
  useEffect(() => {
    const getHeader = async () => {
      try {
        const res = await fetchHeader(language);
        const resService = await fetchServiceHeader(language);
        const newData = res?.data?.LinkHeader || [];
        setHeaderData(newData);
        setServiceHeaderData(resService?.data || []);
      } catch (error) {
        console.error("Error fetching header data:", error);
        setHeaderData(LinkHeader || []);
      }
    };
    if (language) {
      getHeader();
    }
  }, [language, LinkHeader]);


  const tempServices = [
    "Legal Consultation Services",
    "Foreign Investment Services", 
    "Contracts",
    "Notarization",
    "Insurance",
    "and Defense in All Cases",
    "Banks and Financial Institutions",
    "Corporate Governance Services",
    "Companies Liquidation", 
    "Internal Regulations for Companies",
    "Services for Companies and Institutions",
    "Arbitration",
    "Intellectual Property",
    "Corporate Restructuring and Reorganization",
    "Establishing National and Foreign Companies",
    "Commercial Agencies",
    "Supporting Vision 2030",
    "Estates"
  ];

  return (
    <>
      <ul className="w-[500px] max-[1100px]:hidden absolute text-[16px] flex items-center justify-center text-white gap-4">
        {headerData && headerData.length > 0 ?
          headerData.map(item => (
            <li
              key={item.id}
              className={`${item?.name === "Services" ? "flex  items-center gap-3 relative" : ""}  !list-none`}
              onMouseEnter={() => item?.name === "Services" && setIsServicesHovered(true)}
              onMouseLeave={() => item?.name === "Services" && setIsServicesHovered(false)}
            >
              <Link 
                className={`${item?.name === "Services" && "flex  justify-center items-center gap-2"} !list-none `} 
                href={`${item.Url || "#"}`}
              >
                {item?.name === "Services" && <IoIosArrowUp />}
                {item?.name}
                
              </Link>
              
              
              {item?.name === "Services" && isServicesHovered && (
                <div 
                  className="block absolute top-[20px] left-[-400px] !z-50 w-[1200px] bg-[#4B2615] rounded-lg shadow-2xl"
                  onMouseEnter={() => setIsServicesHovered(true)}
                  onMouseLeave={() => setIsServicesHovered(false)}
                >
                  <div className="p-8">
                    
                    <div className="grid grid-cols-4 gap-x-8 gap-y-6">
                      
                      {(serviceHeaderData.length > 0 ? serviceHeaderData : tempServices).map((service, index) => (
                        <div key={index} className="text-white hover:text-gray-500 transition-colors duration-200">
                          <Link 
                            href="#" 
                            className="text-sm font-medium leading-relaxed hover:underline cursor-pointer"
                          >
                            {typeof service === 'object' ? service.title : service}
                            
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
              
            </li>
          ))
          : <li>No links found</li>
        }
      </ul>

  
    <BurgerMenu language={language} isOpen={isOpen} setIsOpen={setIsOpen} headerData={headerData}/>
    </>
  );
}