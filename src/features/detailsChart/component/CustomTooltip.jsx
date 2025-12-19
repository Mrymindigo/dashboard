import React from 'react'

const CustomTooltip = ({ payload }) => {
    return (
        <div className='custom-tooltip p-2 bg-white border shadow rounded '>
            <p className='lable'>
                {`${payload[0]?.payload?.name} : ${payload[0]?.payload?.value}`}
            </p>
        </div>
    )
}

export default CustomTooltip
