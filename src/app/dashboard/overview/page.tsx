import CardContainer from '@/components/CardContainer'
import ChartDiv from '@/components/chartdiv'
import React from 'react'

export default function Overview() {
    return (
        <div className='w-full flex flex-col gap-2 h-full overflow-y-auto px-2'>
            <div className='w-full flex flex-col'>
                <h1 className='font-semibold text-lg'>Total Overview of Costs</h1>
                <CardContainer />
            </div>
            <div className='w-full flex flex-col'>
                <h1 className='font-semibold text-lg'>Targets</h1>
                <ChartDiv />
            </div>
        </div>
    )
}
