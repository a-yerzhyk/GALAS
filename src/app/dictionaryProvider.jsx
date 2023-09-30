'use client'

import { createContext } from 'react'

export const DictionaryContext = createContext({ dictionary: {} })

export default function DictionaryProvider({
  children,
  dictionary,
}) {
  return (
    <DictionaryContext.Provider value={{ dictionary }}>{children}</DictionaryContext.Provider>
  )
}
