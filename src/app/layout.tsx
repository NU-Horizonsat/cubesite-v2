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
      
      <body className={spaceMono.className}>
        <Navbar />
        {children}
        
        </body>
    </html>
  )
}
