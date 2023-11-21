import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import Navbar from './components/navbar'
import { Space_Mono } from 'next/font/google'

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700']  })

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Project Horizon@AeroNU',
  description: 'fill later',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${spaceMono.className} scrollbar-thin scrollbar-thumb-red-800 scrollbar-track-slate-950 min-h-screen`}>
        <Navbar />
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
