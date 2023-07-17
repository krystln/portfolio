import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Akshit Goyal | Developer',
  description: 'Web Developer, Open Source Enthusiast, and a Student. Looking forward for opportunities to learn and grow.',
  image: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Exo+2:wght@100;300;500;700;800&display=swap');
      </style>
      <body >{children}</body>
    </html>
  )
}
