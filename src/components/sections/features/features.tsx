import Container from '@/components/layout/container';
import { featuresItems } from '@/data/data';
import { BlockItem } from '@/lib/types';
import HeaderSections from '../header';
import FeatureItem from './featureItem';

export default function Features() {
 const features = featuresItems.map((feature: BlockItem, index: number) => {
  return <FeatureItem key={index} {...feature} />;
 });

 return (
  <Container>
   <HeaderSections label='Features' title='What You Can Do?' />
   <div className='flex flex-wrap max-lg:justify-center justify-between gap-7'>
    {features}
   </div>
  </Container>
 );
}
