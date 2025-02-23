import React from 'react'

export default function Card({ value, grow, title }: { value: number, grow: number, title: string }) {
    return (
        <div className='w-full h-20 justify-between flex flex-col p-2 rounded bg-secondary'>
            <h1 className='text-base font-medium'>{title}</h1>
            <div className='flex w-full justify-between items-center'>
                <h1 className='text-2xl font-semibold'>${value}</h1>
                <h1 className={`${grow < 0 ? 'text-red-400' : 'text-green-400'} font-semibold`}>{Math.abs(grow)}%</h1>
            </div>
        </div>
    )
}
