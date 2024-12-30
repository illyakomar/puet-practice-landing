import { HeroImg, NavItem } from '@/lib/types';
import DompetAyahSepatuIbu from '../../public/hero/DompetAyahSepatuIbu.jpg';
import TalkingtoStrangers from '../../public/hero/TalkingtoStrangers.jpg';
import TheMidnightLibrary from '../../public/hero/TheMidnightLibrary.jpg';
import TheVisualMBA from '../../public/hero/TheVisualMBA.jpg';

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

export const heroImg: HeroImg[] = [
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
