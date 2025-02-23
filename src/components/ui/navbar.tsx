'use client'
import React from 'react'
import { Button } from './button'
import { MoonIcon, QuestionMarkCircleIcon, SunIcon, UserIcon } from '@heroicons/react/24/outline'
import { useTheme } from 'next-themes';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const { setTheme, theme } = useTheme();
    const pathname = usePathname();
    const bredcrumbs = pathname.split('/').slice(1, 3).join('/')

    return (
        <div className='w-full h-14 pr-2 justify-between border-b items-center flex'>
            <div className='pl-2'>
                <p className='text-gray-400 hover:underline text-sm'>{bredcrumbs}</p>
            </div>
            <div className='flex items-center gap-x-2'>
                <Button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} variant={'ghost'} size={'icon'}>
                    {
                        theme === 'light' ?
                            <SunIcon className='w-6' />
                            :
                            <MoonIcon className='w-6' />
                    }
                </Button>
                <Button variant={'ghost'} size={'icon'}>
                    <QuestionMarkCircleIcon className='w-6' />
                </Button>
                <Button variant={'ghost'} size={'icon'}>
                    <UserIcon className='w-6' />
                </Button>
            </div>
        </div>
    )
}
