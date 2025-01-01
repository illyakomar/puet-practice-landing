import Features from '@/components/sections/features/features';
import Hero from '@/components/sections/hero/hero';
import Reviews from '@/components/sections/reviews/reviews';
import Services from '@/components/sections/services/services';

export default function Home() {
 return (
  <>
   {/* <Hero Section> */}
   <section className='mb-[170px] max-md:mb-12 pt-[62px] max-md:pt-[40px] pb-[30px] relative'>
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
   {/* <Reviews Section> */}
   <section className='section'>
    <Reviews />
   </section>
  </>
 );
}
