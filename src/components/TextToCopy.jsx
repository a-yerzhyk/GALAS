'use client'

import { useContext } from 'react'
import { DictionaryContext } from '@/app/dictionaryProvider'
import { useToast } from "@/hooks/useToast"

import { classNames } from "@/utils/classNames"

export default function TextToCopy ({ text, className }) {
  const { dictionary } = useContext(DictionaryContext)
  const { showToast } = useToast()

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
    showToast(dictionary.copied_to_clipboard)
  }

  const handleClick = () => {
    copyToClipboard(text)
  }
  return (
    <span className={classNames(className, 'cursor-pointer opacity-80 underline hover:opacity-100')} onClick={handleClick}>
      {text}
    </span>
  )
}