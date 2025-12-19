import React from 'react'

const SectionsTitle =({title , buttons}) => {
    
  return (
    <div className='flex items-center justify-between'>
        <div>
            <h2 className='text-2xl font-bold'>{title}</h2>
        </div>
        <div className='flex items-center gap-3'>{buttons}</div>
      
    </div>
  )
}

export default SectionsTitle
