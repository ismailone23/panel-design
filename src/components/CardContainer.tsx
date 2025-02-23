import Card from "./ui/Card"

import React from 'react'

export default function CardContainer() {
    return (
        <div className='w-full xl:grid-cols-4 gap-2 flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3'>
            <Card
                title="Income"
                value={5913.4}
                grow={14}
            />
            <Card
                title="Expense"
                value={230.54}
                grow={-14}
            />
            <Card
                title="Spending"
                value={5913.4}
                grow={14}
            />
            <Card
                title="Total"
                value={5913.4}
                grow={14}
            />
        </div>
    )
}