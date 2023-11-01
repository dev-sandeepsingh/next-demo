'use client'
import '../globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
    return (
    <html lang="en">
      <body>
      <main className="py-0">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
      </main>
      </body>
    </html>
  )
}
