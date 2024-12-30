import { navItems } from '@/data/data';
import Image from 'next/image';
import Link from 'next/link';
import LogoBig from '../../../public/LogoBig.png';
import Container from './container';

export default function Header() {
 return (
  <header className='pt-[77px] max-sm:pt-[50px] z-10'>
   <Container className='flex items-center gap-x-40 max-lg:gap-x-10 max-sm:flex-col max-sm:justify-center max-sm:gap-y-10'>
    <Link className='flex-[0_0_80px] max-sm:flex-[0_0_40px]' href='/'>
     <Image src={LogoBig} height={40} alt='logo' priority />
    </Link>
    <nav>
     <ul className='flex flex-wrap items-center gap-x-10 gap-y-3 max-lg:gap-x-5 max-lg:justify-center'>
      {navItems.map((item, index) => (
       <li key={index}>
        <Link
         className='text-sm text-link hover:text-primary transition-[color] max-sm:text-lg'
         href={item.href}
        >
         {item.title}
        </Link>
       </li>
      ))}
     </ul>
    </nav>
   </Container>
  </header>
 );
}
