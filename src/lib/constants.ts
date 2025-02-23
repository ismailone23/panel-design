import { pageslisttype } from "@/types/type";
import {
    AdjustmentsHorizontalIcon,
    ArrowTrendingUpIcon,
    BanknotesIcon,
    BuildingStorefrontIcon,
    ShoppingCartIcon,
    UsersIcon
} from "@heroicons/react/24/outline"

export const pageslist: pageslisttype[] = [
    {
        href: '/dashboard/overview',
        title: 'Overview',
        Icon: ArrowTrendingUpIcon
    },
    {
        href: '/dashboard/billings',
        title: 'Billing',
        Icon: BanknotesIcon
    },
    {
        href: '/dashboard/sales',
        title: 'Sales',
        Icon: ShoppingCartIcon
    },
    {
        href: '/dashboard/shop',
        title: 'Shop',
        Icon: BuildingStorefrontIcon
    },
    {
        href: '/dashboard/customers',
        title: 'Customers',
        Icon: UsersIcon
    },
    {
        href: '/dashboard/admins',
        title: 'Admins',
        Icon: AdjustmentsHorizontalIcon
    }
] 