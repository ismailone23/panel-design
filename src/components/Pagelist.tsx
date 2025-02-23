'use client'

import { pageslist } from '@/lib/constants'
import { Button } from './ui/button'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Pagelist() {
    const pathname = usePathname()

    return (
        <div className='h-full flex w-full flex-col gap-y-3'>
            {
                pageslist.map(({ href, title, Icon }, i) =>
                    <Button variant={pathname === href ? 'secondary' : 'ghost'} className='w-full rounded-none' asChild key={i}>
                        <Link href={href}>
                            <span className='w-full justify-start flex gap-x-3'>
                                <Icon className='w-6' />
                                {title}
                            </span>
                        </Link>
                    </Button>
                )
            }
        </div>
    )
}