import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

const popinsFont = Poppins({ weight: ['400', '600', '700'], subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Bank Website💸 ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="../app/icon.ico" sizes="any" />
      </head>
      <body className={popinsFont.className}>{children}</body>
    </html>
  )
}
