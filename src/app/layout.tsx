import { Sidebar } from '@/components/Sidebar';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { twMerge } from 'tailwind-merge';
import { Footer } from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'Nicolas Perez - Developer',
  description: 'Hello! Im Nicolás, web and videogame developer. Enter and let my showcase my proyects',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={twMerge(inter.className, 'flex antialiased h-screen overflow-hidden bg-stone-900')}>
        <Sidebar />
        <div className="lg:pl-2 lg:pt-2 bg-stone-900 flex-1 overflow-y-auto">
          <div className="flex-1 bg-stone-900 min-h-screen lg:rounded-tl-xl border border-transparent lg:border-neutral-700 overflow-y-auto">
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
