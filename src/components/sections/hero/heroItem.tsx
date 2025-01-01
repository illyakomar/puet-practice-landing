import { Img } from '@/lib/types';
import Image from 'next/image';
import Link from 'next/link';

export default function HeroItem({ alt, src, href }: Img) {
 return (
  <Link href={href || '#'} className='block img-item animate-float'>
   <Image
    src={src}
    alt={alt}
    className='rounded-xl shadow-img'
    quality={100}
    priority
   />
  </Link>
 );
}
