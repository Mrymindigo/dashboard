import React from 'react'
import Modal from '../../../components/common/Modal'
import { HiEye } from 'react-icons/hi'

const ChangeVisibilityIcon = () => {
    const Trigger = () => <button className='cursor-pointer text-lg text-blue-500'>
        <HiEye className='text-lg' />
    </button>
  return (
    <Modal title='تغییر وضعیت انتشار' Trigger={<Trigger />}>

    </Modal>
  )
}

export default ChangeVisibilityIcon
