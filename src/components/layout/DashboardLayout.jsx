import React from 'react'
import {Outlet} from 'react-router'
import Sidebar from '../../features/sidebar/Sidebar'
import Topbar from '../../features/topbar/Topbar'
export default function DashboardLayout() {
  return (
    <>
    <main className='flex'>
    <Sidebar />
    <section className='grow *:px-6'>
      <Topbar />
      <div className="content mt-6 container mx-auto">
        content
        <div className='relative z-10'>
          <Outlet />
        </div>
      </div>
    </section>
    </main>
    
    </>
  )
}
