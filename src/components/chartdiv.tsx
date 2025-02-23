import React from 'react'
import { ChartComponent } from './ui/chart-comp'

export default function ChartDiv() {
    return (
        <div className='w-full xl:grid-cols-4 gap-2 flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3'>
            <ChartComponent />
        </div>
    )
}
