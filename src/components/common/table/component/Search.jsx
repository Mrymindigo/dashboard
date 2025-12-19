import React from 'react'
import { HiSearch } from 'react-icons/hi'

const Search = () => {
  return (
    <div className='flex items-center justify-center gap-2 w-[256px]'>
        <HiSearch  />
        <input type="text" placeholder='جستجو کنید ' className=' text-sm outline-none size-full px=8 left-0 right-0 ' />
    </div>
  )
}

export default Search
