import React, { useState } from 'react'
import Table from '../../components/common/table/Table'
import TableHead from '../../components/common/table/component/TableHead'
import TableHeadCell from '../../components/common/table/component/TableHeadCell'
import TableBody from '../../components/common/table/component/TableBody'
import TableRow from '../../components/common/table/component/TableRow'
import TableCell from '../../components/common/table/component/TableCell'
import { Link } from 'react-router'
import { MdOpenInNew } from 'react-icons/md'
import { products, productsTableHeadRow } from '../../data/products'
import clsx from 'clsx'
import RemoveProductIcon from './component/RemoveProductIcon'
import ChangeVisibilityIcon from './component/ChangeVisibilityIcon'
import EditProductIcon from './component/EditProductIcon'

const LastProductTable = () => {
  const [lastProducts, setLastProducts] = useState([...products])

  const Buttons = () => {
    return <Link to={"/products"} className='underline hover:text-blue-400 text-blue-500 gap-1 flex items-center justify-center text-sm'>
      <span> صفحه محصولات</span>
      <MdOpenInNew />
    </Link>
  }

  const removeProduct = (id) => {
    const newProducts = lastProducts.filter((product) => product.id !== id);
    setLastProducts(newProducts);
  };

  const changeProductVisibility = (id) => {
    const newProducts = lastProducts.map(product => {
      return product.id === id
        ? { ...product, isPublished: !product.isPublished }
        : { ...product }
    })

    setLastProducts(newProducts)
  }

  return (
    <div>
      <Table header={{ title: "لیست محصولات", Buttons: Buttons }}>
        <TableHead>
          {productsTableHeadRow.map((row) => (
            <TableHeadCell key={row}>{row}</TableHeadCell>
          ))}
        </TableHead>
        <TableBody>
          {lastProducts.map((product) => (
            <TableRow key={product.id}>
              <TableCell>{product.id.slice(0, 10)}...</TableCell>

              <TableCell >{product.title}</TableCell>

              <TableCell >
                <p className={clsx(
                  product.isPublished ? "text-green-500 bg-green-500/10" : "bg-red-500/10 text-red-500",
                  "text-xs flex-center gap-1 px-1 py-0.5 rounded-md border max-w-max cursor-pointer select-none hover:opacity-80 max-h-max"
                )}>
                  {product.isPublished ? "عمومی" : "خصوصی"}
                </p>
              </TableCell>

              <TableCell>
                <div className='flex gap-2'>
                  <span>{product.price.toLocaleString("fa-IR")}</span>
                  <span>تومان</span>
                </div>
              </TableCell>

              <TableCell>
                <div className='flex items-center gap-3'>
                  <RemoveProductIcon product={product} handler={removeProduct} />
                  <ChangeVisibilityIcon product={product} handler={changeProductVisibility} />
                  <EditProductIcon product={product} />
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default LastProductTable
