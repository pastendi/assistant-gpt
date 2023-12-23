import { Inter } from 'next/font/google'
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import Provider from './provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'My assitant',
  description:
    'This is developed to play a role of assitant for me but it can be your assitant too',
}

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang='en'>
        <body className={inter.className}>
          <Provider>{children}</Provider>
        </body>
      </html>
    </ClerkProvider>
  )
}
