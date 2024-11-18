import { Inter } from 'next/font/google'
import "./globals.css";
import Header from 'components/Header';
import Footer from 'components/Footer';
import { Providers } from './providers';

const inter = Inter({
  subsets: ['latin'],
})

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es-pe" suppressHydrationWarning>
      <body className='bg-white dark:bg-slate-800'>
        <div className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
          <div className={`${inter.className} flex h-screen flex-col justify-between font-sans`}>
            <Providers>
              <Header />
              <main className="mb-auto">{children}</main>
              <Footer />
            </Providers>
          </div>
        </div>
      </body>
    </html>
  )
}
