import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';
import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const plusJakartaSans = Plus_Jakarta_Sans({
 variable: '--font-plus-jakarta-sans',
 weight: ['400', '500', '700', '800'],
 subsets: ['latin'],
});

export const metadata: Metadata = {
 title: 'Practice Landing Tailwind',
 description: 'Generated by Illya',
};

export default function RootLayout({
 children,
}: Readonly<{
 children: React.ReactNode;
}>) {
 return (
  <html lang='en'>
   <body
    className={`${plusJakartaSans.variable} antialiased font-jakarta bg-background text-desc`}
   >
    <div className='min-h-screen flex flex-col overflow-clip'>
     <Header />
     <main className='flex-grow'>{children}</main>
     <Footer />
    </div>
   </body>
  </html>
 );
}
