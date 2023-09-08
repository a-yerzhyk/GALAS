import '@/styles/globals.scss'
import { Montserrat } from 'next/font/google'
import { i18n } from '@/i18n/i18n-config'

const montserrat = Montserrat({ subsets: ['latin', 'cyrillic'] })

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }))
}

export const metadata = {
  title: 'GALAS',
  description: 'Charity program for Ukraine',
}

export default function RootLayout({ children, params }) {
  return (
    <html lang={params.lang}>
      <body className={montserrat.className}>{children}</body>
    </html>
  )
}
