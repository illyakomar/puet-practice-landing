import { BlockItem } from '@/lib/types';
import Image from 'next/image';

export default function ServiceItem({
 src,
 alt,
 description,
 title,
}: BlockItem) {
 return (
  <article className='flex group lg:odd:flex-row-reverse max-lg:flex-col items-start gap-8'>
   <div className='flex-[1_1_250px]'>
    <div className='space-y-8 lg:max-w-[420px] lg:group-odd:ml-auto'>
     <h4 className='text-[32px] font-medium text-foreground'>{title}</h4>
     <div className='space-y-4'>
      <p className='leading-relaxed'>{description}</p>
     </div>
    </div>
   </div>
   <div className='mx-auto flex-[1_1_250px] max-w-[600px] w-full relative aspect-[3/2]'>
    <Image className='rounded-xl shadow-img' fill src={src} alt={alt} />
   </div>
  </article>
 );
}
