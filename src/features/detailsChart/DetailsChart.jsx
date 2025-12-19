import React from 'react'
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts'
import { generateChartData } from '../../utils/home'
import CustomTooltip from './component/CustomTooltip'

const DetailsChart = () => {
    const data = generateChartData({
        productsLength: 12,
        usersLength: 80,
        ticketsLength: 190,
        adminsLength: 4
    })
    return (
        <div className='p-5 space-y-10 bg-white rounded-xl border border-zinc-300'>
            <p className='text-lg'>آمار کلی داشبورد</p>
            <div className='w-full h-[400px] '>
                <ResponsiveContainer>
                    <BarChart data={data}>
                        <Bar dataKey="value" fill='#8884d8' />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip content={CustomTooltip} />
                    </BarChart>

                </ResponsiveContainer>
            </div>


        </div>
    )
}

export default DetailsChart
