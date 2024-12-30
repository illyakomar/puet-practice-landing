import Features from '@/components/sections/features/features';
import Hero from '@/components/sections/hero/hero';
import Services from '@/components/sections/services/services';

export default function Home() {
 return (
  <>
   {/* <Hero Section> */}
   <section className='mb-[170px] pt-[62px] max-md:pt-[40px] pb-[30px] relative'>
    <Hero />
   </section>
   {/* <Features Section> */}
   <section className='section'>
    <Features />
   </section>
   {/* <Services Section> */}
   <section className='section'>
    <Services />
   </section>
  </>
 );
}
