import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Procura de Ações',
  description: 'Busque a sua ação favorita',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
