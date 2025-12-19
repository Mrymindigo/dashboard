import React from 'react'
import TableHeader from './component/TableHeader'

const Table = ({
  header ={title : "لیست آیتم ها" , Buttons : undefined},
  children
}) => {
  return (
    <div className="mt-10 border min-w-full! bg-white border-zinc-300 rounded-xl overflow-hidden">
    <TableHeader header={header} />
    <div>{children}</div>
  </div>
  )
}

export default Table
