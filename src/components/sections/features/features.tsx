import Container from '@/components/layout/container';
import { featuresImg } from '@/data/data';
import Image from 'next/image';
import HeaderSections from '../header';

export default function Features() {
 return (
  <Container>
   <HeaderSections label='Features' title='What You Can Do?' />
   <div className='flex flex-wrap max-lg:justify-center justify-between gap-7'>
    {featuresImg.map((feature, index) => (
     <div
      key={index}
      className='flex-[0_1_280px] grid gap-y-5 justify-items-center text-center'
     >
      <div className='bg-primary p-7 rounded-[20px] shadow-3xl'>
       <Image src={feature.src} alt={feature.alt} />
      </div>
      <h4 className='font-bold text-2xl	text-foreground'>{feature.title}</h4>
      <p className='leading-[187.5%]'>{feature.description}</p>
     </div>
    ))}
   </div>
  </Container>
 );
}
