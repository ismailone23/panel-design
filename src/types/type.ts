import {
    ForwardRefExoticComponent,
    RefAttributes,
    SVGProps
} from "react";


export type pageslisttype = {
    href: string
    title: string
    Icon: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & {
        title?: string;
        titleId?: string;
    } & RefAttributes<SVGSVGElement>>
}