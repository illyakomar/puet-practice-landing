import { BlockItem, Img, NavItem } from '@/lib/types';
import Ahmad from '../../public/avatar/1.jpg';
import Muhammad from '../../public/avatar/2.jpg';
import Wahyu from '../../public/avatar/3.jpg';
import DompetAyahSepatuIbu from '../../public/hero/DompetAyahSepatuIbu.jpg';
import TalkingtoStrangers from '../../public/hero/TalkingtoStrangers.jpg';
import TheMidnightLibrary from '../../public/hero/TheMidnightLibrary.jpg';
import TheVisualMBA from '../../public/hero/TheVisualMBA.jpg';
import Search from '../../public/icons/1.svg';
import Review from '../../public/icons/2.svg';
import Wishlist from '../../public/icons/3.svg';

export const navItems: NavItem[] = [
 {
  title: 'Feature',
  href: '#features',
 },
 {
  title: 'Service',
  href: '#services',
 },
 {
  title: 'Review',
  href: '#reviews',
 },
 {
  title: 'Location',
  href: '#location',
 },
];

export const heroItems: Img[] = [
 {
  src: DompetAyahSepatuIbu,
  alt: 'Dompet Ayah Sepatu Ibu',
  href: '#features',
 },
 {
  src: TalkingtoStrangers,
  alt: 'Talking to Strangers',
  href: '#services',
 },
 {
  src: TheMidnightLibrary,
  alt: 'The Midnight Library',
  href: '#reviews',
 },
 {
  src: TheVisualMBA,
  alt: 'The Visual MBA',
  href: '#location',
 },
];

export const featuresItems: BlockItem[] = [
 {
  src: Search,
  alt: 'Search book',
  title: 'Search book',
  description:
   'Effortlessly find your next read with our powerful and intuitive book search.',
 },
 {
  src: Review,
  alt: 'Review',
  title: 'Review book',
  description:
   'Discover insightful critiques and share your thoughts on diverse literary masterpieces effortlessly.',
 },
 {
  src: Wishlist,
  alt: 'Wishlist',
  title: 'Wishlist book',
  description:
   'Curate your literary dreams–wishlist books for future adventures and discoveries.',
 },
];

export const servicesItems: BlockItem[] = [
 {
  src: '/services/Service.jpg ',
  alt: 'Service',
  title: 'Rent your favorite book fairly easy on Lidia!',
  description:
   'Viewing, rent, and organize your favorite books has never been easier. An integrated digital library rent that’s simple to use, Lidia lets you spend less time managing your work and more time actually doing it! Effortless rentals, personalized shelves—Lidia transforms book management, enhancing your reading experience~',
 },
 {
  src: '/services/Reading.jpg',
  alt: 'Reading',
  title: 'Quick Book Rentals: Dive into Reading Instantly',
  description:
   'Discover instant literary delight. Access a vast library, borrow your favorite reads, and dive into captivating stories within minutes. Reading made quick and easy, just a click away! Unlock a world of stories effortlessly. Browse genres, choose, rent in minutes. Seamlessly manage your reading adventures with our intuitive platform~',
 },
];

export const reviewsItems: BlockItem[] = [
 {
  src: Ahmad,
  alt: 'Ahmad',
  title: 'Ahmad Saugi',
  description:
   'Engaging plot, vivid characters; a captivating read that lingers in your thoughts.',
 },
 {
  src: Muhammad,
  alt: 'Muhammad',
  title: 'Muhammad Alfian',
  description:
   'Thought-provoking narrative and rich prose. A must-read for any avid book lover!',
 },
 {
  src: Wahyu,
  alt: 'Wahyu',
  title: 'Wahyu Amirulloh',
  description:
   'Immersive storytelling! An enriching literary experience worth savoring and sharing.',
 },
];
