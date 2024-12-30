import { StaticImageData } from 'next/image';

export interface NavItem {
 title: string;
 href: string;
}

export interface Img {
 src: StaticImageData | string;
 alt: string;
 href?: string;
}

export interface BlockItem extends Img {
 title: string;
 description: string;
}
