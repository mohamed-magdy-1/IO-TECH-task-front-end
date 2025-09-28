'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Pagination({ meta }) {
    const router = useRouter();
    
    const pageCount = meta?.pagination?.pageCount || 1;
    const currentPage = meta?.pagination?.page || 1;

    const goToPage = (page) => {
        if (page === currentPage || page < 1 || page > pageCount) return;
        router.push(`?page=${page}`);
    };

    const getPagesArray = () => {
        const pages = [];
        
    
        if (pageCount >= 1) pages.push(1);
        
    
        if (currentPage > 3) pages.push('...');
        
    
        for (let i = Math.max(2, currentPage - 1); i <= Math.min(pageCount - 1, currentPage + 1); i++) {
            if (!pages.includes(i)) pages.push(i);
        }
        

        if (currentPage < pageCount - 2) pages.push('...');
        
        
        if (pageCount > 1 && !pages.includes(pageCount)) pages.push(pageCount);
        
        return pages;
    };

    return (
        <div style={{direction:"ltr"}} className="flex   items-center justify-end gap-1 mt-[40px]">
        
            <button
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
                className="flex items-center justify-center w-8 h-8 rounded   bg-white hover:bg-[#4B2615] disabled:opacity-50 disabled:cursor-not-allowed"
            >
                <FaChevronLeft className="w-3 h-3 text-black" />
            </button>

            
            {getPagesArray().map((page, index) => (
                <button
                    key={index}
                    onClick={() => typeof page === 'number' ? goToPage(page) : null}
                    disabled={page === '...'}
                    className={`
                        flex items-center justify-center w-8 h-8 text-sm font-medium 
                        ${currentPage === page 
                            ? 'bg-transparent text-black cursor-pointer border-b-2 rounded-none border-[#4B2615]' 
                            : page === '...' 
                                ? 'bg-white text-gray-400 cursor-default border rounded border-gray-300' 
                                : 'bg-white text-gray-700 rounded  hover:bg-gray-50'
                        }
                    `}
                >
                    {page}
                </button>
            ))}

           
            <button
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === pageCount}
                className="flex items-center justify-center w-8 h-8 rounded   bg-transparent hover:bg-[#4B2615] disabled:opacity-50 disabled:cursor-not-allowed"
            >
                <FaChevronRight className="w-3 h-3 text-black" />
            </button>
        </div>
    );
}