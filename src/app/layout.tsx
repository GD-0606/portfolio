import './globals.css';
import type { Metadata } from 'next';
import Header from '@/components/Header/header';
export const metadata: Metadata = {
  title: 'Portfolio.'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-navy text-slate text-xl`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
