import Pagelist from '../Pagelist'
import { Button } from './button'
import Link from 'next/link'

export default function Sidebar() {
    return (
        <div className='flex flex-col h-full w-36'>
            <Button asChild variant={'link'} className='mt-2'>
                <Link href={'/'}>
                    <p className='text-xl'>Dashboard</p>
                </Link>
            </Button>
            <div className='flex mt-3 w-full h-full border-r'>
                <Pagelist />
            </div>
        </div>
    )
}
