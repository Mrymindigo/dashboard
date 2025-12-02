import React from 'react'
import menus from '../../data/menus'
import SidebarHeader from './component/SidebarHeader'
import Menus from './component/Menus'


export default function Sidebar() {
  return (
  <aside className='w-[272px] relative z-10 bg-white
  h-screen sticky top-0 border-l border-gray-300 p-6  '>
  <SidebarHeader />
  <Menus menus={menus} />
  </aside>

  )
}
