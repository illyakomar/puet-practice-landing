import type { Config } from 'tailwindcss';

export default {
 content: [
  './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
  './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  './src/app/**/*.{js,ts,jsx,tsx,mdx}',
 ],
 theme: {
  extend: {
   colors: {
    background: 'var(--background)',
    foreground: 'var(--foreground)',
    primary: 'var(--primary)',
    heading: 'var(--heading)',
    desc: 'var(--desc)',
    border: 'var(--border)',
    link: 'var(--link)',
   },
   fontFamily: {
    jakarta: ['var(--font-plus-jakarta-sans)'],
   },
   fontSize: {
    sectionHeader: 'clamp(2rem, 1.3151rem + 2.1918vw, 3rem)',
    title: 'clamp(2.625rem, 1.1695rem + 4.6575vw, 4.75rem)',
   },
   boxShadow: {
    '3xl': '0 30px 60px 0 rgba(68, 117, 242, 0.25)',
    '4xl': '0 30px 60px 0 rgba(68, 117, 242, 0.5)',
    img: '0 15px 30px 0 rgba(0, 0, 0, 0.25)',
   },
   keyframes: {
    float: {
     '0%, 100%': { transform: 'translateY(0)' },
     '50%': { transform: 'translateY(-10px)' },
    },
   },
   animation: {
    float: 'float 5s ease-in-out infinite',
   },
  },
 },
 plugins: [],
} satisfies Config;
