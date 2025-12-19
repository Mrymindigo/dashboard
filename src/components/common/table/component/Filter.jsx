import React from 'react'
import { HiFilter } from "react-icons/hi"

const Filter = () => {
  return (
    <button className="flex items-center justify-center gap-1 border border-zinc-300">
    <HiFilter className="text-lg" />
    <span className="text-sm">فیلتر</span>
  </button>
  )
}

export default Filter
