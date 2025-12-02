import React from 'react'
import {Link} from 'react-router'

export default function SidebarHeader() {
  return (
    <>
    <div className='pb-6 border-b border-gray-300 '>
    <Link to="/" className='flex gap-3 items-center'>
    <img src="public\images\logo.png" alt="logo" className='size-6' />
    <span className='text-lg font-black! text-zinc-900'>پنل سبز</span>
    </Link>
    </div>
    </>
  )
}
