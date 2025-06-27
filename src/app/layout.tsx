import './globals.css';
import type { Metadata } from 'next';
import Header from '@/components/layout/header/header';
import Footer from '@/components/layout/footer/footer';
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
      <body>
        <div id="root" className="relative">
          <div id="layout" className="relative flex flex-col min-h-screen">
            <Header />
            <aside className="fixed w-[40px] left-[40px] bottom-0 right-auto z-10 max-tabletL:hidden">1</aside>
            <aside className="fixed w-[40px] right-[40px] bottom-0 left-auto z-10 text-right max-tabletL:hidden">2</aside>
            <div id="content" className="relative border">
              <main className=" mx-auto relative w-full max-w-[1600px] min-h-screen px-[150px] max-desktopS:px-[100px] max-desktopXS:px-[50px] max-tabletL:px-[5px] max-tabletL:max-w-none max-tabletL:mx-0 counter-reset-section-header">
                {children}
              </main>
              <Footer />
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
