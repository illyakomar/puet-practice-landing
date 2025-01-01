import Container from '@/components/layout/container';
import { heroItems } from '@/data/data';
import { Img } from '@/lib/types';
import Link from 'next/link';
import HeroItem from './heroItem';

export default function Hero() {
 const heroImgs = heroItems.map((hero: Img, index: number) => {
  return <HeroItem key={index} {...hero} />;
 });

 return (
  <Container className='flex gap-x-8 gap-y-11 container-background max-lg:flex-col'>
   <div className='flex-[0_1_50%] grid gap-y-8 sm:justify-items-start items-center'>
    <h1 className='text-heading text-title font-extrabold leading-[117%] tracking-[-2px]'>
     Search & review your{' '}
     <Link
      href='#'
      className='underline text-primary hover:no-underline cursor-pointer'
     >
      fav book
     </Link>{' '}
     effortlessly
    </h1>
    <div className='leading-[30px]'>
     <p>
      Embark on a literary journey like never before with our revolutionary
      library application! Introducing a seamless experience that transcends
      traditional boundaries, where you can effortlessly search your favorite
      books.✨
     </p>
    </div>
    <Link className='button' href='#'>
     Start now →
    </Link>
   </div>
   <div className='flex-[0_1_50%] z-20 grid grid-cols-3 grid-rows-2 gap-[27px]'>
    {heroImgs}
   </div>
  </Container>
 );
}
