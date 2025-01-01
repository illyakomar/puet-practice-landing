import Container from '@/components/layout/container';
import { servicesItems } from '@/data/data';
import { BlockItem } from '@/lib/types';
import HeaderSections from '../header';
import ServiceItem from './serviceItem';

export default function Services() {
 const services = servicesItems.map((service: BlockItem, index: number) => {
  return <ServiceItem key={index} {...service} />;
 });

 return (
  <Container>
   <HeaderSections label='Services' title='The Services for You' />
   <div className='grid gap-y-20 max-lg:gap-y-10'>{services}</div>
  </Container>
 );
}
