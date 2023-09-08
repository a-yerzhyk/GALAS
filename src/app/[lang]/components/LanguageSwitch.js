'use client'

import { useRouter } from 'next/navigation'
import { classNames } from "@/utils/classNames";

const supportedLangs = ['uk', 'pl']

export default function LanguageSwitch({ lang: currentLang }) {
  const router = useRouter()

  const handleLanguageSwitch = (lang) => {
    if (lang !== currentLang) {
      router.push(`/${lang}`)
    }
  }

  return (
    <div className="space-x-2">
      {
        supportedLangs.map(supported => (
          <button
            key={supported}
            className={classNames(
              'rounded-full w-[45px] h-[45px] border-4 text-sm uppercase',
              supported === currentLang ? 'border-white text-white hidden sm:inline-block' : 'border-blue text-blue'
            )}
            onClick={() => handleLanguageSwitch(supported)}
          >
            {supported}
          </button>
        ))
      }
    </div>
  )
}