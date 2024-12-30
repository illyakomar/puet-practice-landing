import { StaticImageData } from 'next/image';

export interface NavItem {
 title: string;
 href: string;
}

export interface HeroImg {
 src: StaticImageData;
 alt: string;
 href: string;
}
