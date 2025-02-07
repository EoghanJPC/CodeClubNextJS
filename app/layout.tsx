import NavBar from './components/NavBar'
import './globals.css'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Code Club',
  description: 'Generated by create next app',
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />

        
        {children}
      </body>
    </html>
  )
}
