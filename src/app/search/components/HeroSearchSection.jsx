"use client"
import React from "react";
import Image from "next/image";
import { FiSearch } from "react-icons/fi";

export default function HeroSearchSection({ query, setQuery, isLoading, isRTL }) {
  return (
    <div className="relative w-full h-[400px] md:h-[500px]">
      <Image
        src="/HeroSectionImage.jpg"
        fill
        priority
        alt="Hero Image"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
      
      
      <div className="absolute inset-0 flex items-center justify-center px-4">
        <div className="w-full max-w-2xl">
          <h1 className="text-white text-3xl md:text-5xl font-bold text-center mb-8">
            {isRTL ? "البحث في خدماتنا وفريقنا" : "Search Our Services & Team"}
          </h1>
          <div className="relative">
            <FiSearch className={`absolute top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 ${isRTL ? 'right-4' : 'left-4'}`} />
            <input
              type="text"
              placeholder={isRTL ? "ابحث هنا..." : "Search here..."}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className={`w-full py-4 px-12 text-lg rounded-xl border-0 shadow-2xl focus:ring-4 focus:ring-blue-500/30 focus:outline-none bg-white/95 backdrop-blur-sm ${isRTL ? 'text-right' : 'text-left'}`}
              dir={isRTL ? 'rtl' : 'ltr'}
            />
            {isLoading && (
              <div className={`absolute top-1/2 transform -translate-y-1/2 ${isRTL ? 'left-4' : 'right-4'}`}>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-600"></div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}