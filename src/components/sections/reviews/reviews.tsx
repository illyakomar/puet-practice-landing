import Container from '@/components/layout/container';
import HeaderSections from '../header';

import { reviewsItems } from '@/data/data';
import { BlockItem } from '@/lib/types';
import ReviewsItem from './reviewsItem';

export default function Reviews() {
 const reviews = reviewsItems.map((review: BlockItem, index: number) => {
  return <ReviewsItem key={index} {...review} />;
 });

 return (
  <Container>
   <HeaderSections
    label='Reviews'
    title='Reviews of Others
'
   />
   <div className='flex flex-wrap gap-12'>{reviews}</div>
  </Container>
 );
}
