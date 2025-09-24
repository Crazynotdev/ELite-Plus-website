import { Metadata } from 'next'
import '../styles/globals.css'
import { LanguageSwitcher } from '@/components/LanguageSwitcher'
import DarkModeToggle from '@/components/DarkModeToggle'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Lycée Elite Plus',
  description: 'Plateforme scolaire moderne, rapide et sécurisée pour tous les acteurs du lycée.',
  icons: { icon: '/logo-lycee.png' },
  themeColor: '#6c4edb',
  openGraph: {
    title: 'Lycée Elite Plus',
    description: 'Plateforme scolaire moderne, rapide et sécurisée pour tous les acteurs du lycée.',
    images: ['/logo-lycee.png'],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#6c4edb" />
      </head>
      <body className="bg-gradient-to-br from-blue-100 via-fuchsia-100 to-pink-50 dark:from-blue-950 dark:via-fuchsia-950 dark:to-pink-800 transition-colors">
        <Navbar />
        <div className="fixed top-4 right-4 flex gap-2 z-50">
          <DarkModeToggle />
          <LanguageSwitcher />
        </div>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
