import '@/styles/globals.scss'
import { Montserrat } from 'next/font/google'
import { i18n } from '@/i18n/i18n-config'
import { getDictionary } from '@/i18n/get-dictionary'
import DictionaryProvider from '../dictionaryProvider.jsx'

const montserrat = Montserrat({ subsets: ['latin', 'cyrillic'] })

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }))
}

export const metadata = {
  title: 'GALAS',
  description: 'Charity program for Ukraine',
}

export default async function RootLayout({ children, params }) {
  const lang = params.lang
  const dictionary = await getDictionary(lang)

  return (
    <html lang={lang}>
      <body className={montserrat.className}>
        <DictionaryProvider dictionary={dictionary}>
          {children}
        </DictionaryProvider>
      </body>
    </html>
  )
}
