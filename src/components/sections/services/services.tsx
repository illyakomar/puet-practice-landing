import Container from '@/components/layout/container';
import { servicesImg } from '@/data/data';
import Image from 'next/image';
import HeaderSections from '../header';

export default function Services() {
 return (
  <Container>
   <HeaderSections label='Services' title='The Services for You' />
   <div className='grid gap-y-20 max-lg:gap-y-10'>
    {servicesImg.map((service, index) => (
     <article
      key={index}
      className='flex group lg:odd:flex-row-reverse max-lg:flex-col items-start gap-8'
     >
      <div className='flex-[1_1_250px]'>
       <div className='space-y-8 lg:max-w-[420px] lg:group-odd:ml-auto'>
        <h4 className='text-[32px] font-medium text-foreground'>
         {service.title}
        </h4>
        <div className='space-y-4'>
         <p className='leading-[187.5%]'>{service.description}</p>
        </div>
       </div>
      </div>
      <div className='mx-auto flex-[1_1_250px] max-w-[600px] w-full relative aspect-[3/2]'>
       <Image
        className='rounded-xl shadow-img'
        fill
        src={service.src}
        alt={service.alt}
       />
      </div>
     </article>
    ))}
   </div>
  </Container>
 );
}
