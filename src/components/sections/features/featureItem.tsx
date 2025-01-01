import { BlockItem } from '@/lib/types';
import Image from 'next/image';

export default function FeatureItem({
 title,
 description,
 src,
 alt,
}: BlockItem) {
 return (
  <div className='flex-[0_1_280px] grid gap-y-5 justify-items-center text-center'>
   <div className='bg-primary p-7 rounded-[20px] shadow-3xl'>
    <Image src={src} alt={alt} />
   </div>
   <h4 className='font-bold text-2xl	text-foreground'>{title}</h4>
   <p className='leading-relaxed'>{description}</p>
  </div>
 );
}
