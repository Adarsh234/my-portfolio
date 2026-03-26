import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from './provider'
// 1. IMPORT YOUR NEW SCROLL PROVIDER
import SmoothScrolling from '@/components/ui/SmoothScrolling'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Adarsh Sharma | Full Stack Developer',
  description:
    'Portfolio of Adarsh Sharma, featuring projects in Web Development and Cyber Security.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          {/* 2. WRAP CHILDREN IN THE SMOOTH SCROLLER */}
          <SmoothScrolling>{children}</SmoothScrolling>
        </Providers>
      </body>
    </html>
  )
}
