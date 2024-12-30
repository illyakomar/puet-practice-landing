import Container from '@/components/layout/container';
import { heroImg } from '@/data/data';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
 return (
  <Container className='flex gap-8 container-background max-lg:flex-col'>
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
    {heroImg.map((img, index) => (
     <Link href={img.href} key={index} className='block img-item'>
      <Image
       src={img.src}
       alt={img.alt}
       className='rounded-xl shadow-img'
       quality={100}
       priority
      />
     </Link>
    ))}
   </div>
  </Container>
 );
}
