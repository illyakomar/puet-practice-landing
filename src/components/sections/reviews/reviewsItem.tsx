import { BlockItem } from '@/lib/types';
import Image from 'next/image';

export default function ReviewsItem({
 src,
 alt,
 description,
 title,
}: BlockItem) {
 return (
  <article className='flex-[1_1_280px] shadow-lg p-10 border border-border grid justify-items-center text-center '>
   <Image src={src} alt={alt} className='mb-7' />
   <p className='mb-6 leading-relaxed'>{description}</p>
   <h4>
    <a className='text-primary' href='#'>
     {title}
    </a>
   </h4>
  </article>
 );
}
