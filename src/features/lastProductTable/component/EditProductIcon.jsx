import React from 'react'
import Modal from '../../../components/common/Modal'
import {BiEdit} from 'react-icons/bi'

const EditProductIcon = () => {
    const Trigger = () => <button className='cursor-pointer text-lg text-green-500'>
        <BiEdit className='text-lg'/>
    </button>
  return (
    <Modal title='تغییر جزئیات محصول' Trigger={<Trigger />}>

    </Modal>
  )
}

export default EditProductIcon
