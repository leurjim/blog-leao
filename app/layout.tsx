import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import "./globals.css";
import Header from 'components/Header';
import { ReactNode } from 'react'
import Footer from 'components/Footer';

interface Props {
  children: ReactNode
}

export const metadata: Metadata = {
  title: 'Leao Urbina',
  description: 'leaourbina.com',
}

const inter = Inter({
  subsets: ['latin'],
})

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
          <div className={`${inter.className} flex h-screen flex-col justify-between font-sans`}>
            <Header />
            <main className="mb-auto">{children}</main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  )
}
