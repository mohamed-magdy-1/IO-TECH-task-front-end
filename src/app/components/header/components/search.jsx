'use client'
import { CiSearch } from "react-icons/ci";
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setSearchQuery } from '@/app/store/slices/appSlice'
import { useRouter } from 'next/navigation'

export default function SearchInput() {
  const dispatch = useDispatch()
  const searchQuery = useSelector(state => state.app.searchQuery)
  const [input, setInput] = useState(searchQuery)
const router = useRouter()
  const handleSearch = (e) => {
    if(e.key === 'Enter') {
      dispatch(setSearchQuery(input))
      router.push(`/search?query=${encodeURIComponent(input)}`)
    }
  }

  return (
    <>
    <div className="flex items-center gap-2 text-white hover:w-[200px] transition-[width] duration-300 ease-in-out cursor-pointer  w-[30px] overflow-hidden">
          <div className="text-white text-2xl cursor-pointer">
            <CiSearch />
          </div>
          
        <input
      type="text"
      value={input}
      onChange={(e) => setInput(e.target.value)}
      onKeyDown={handleSearch}
      placeholder="Search..."
      className="px-2 w-[166px] outline-none py-1 rounded border"
    />
    </div>

    </>

  )
}
