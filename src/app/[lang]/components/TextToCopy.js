'use client'

import { classNames } from "@/utils/classNames"

export default function TextToCopy ({ text, className }) {
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
  }

  const handleClick = () => {
    copyToClipboard(text)
  }
  return (
    <span className={classNames(className, 'cursor-pointer')} onClick={handleClick}>
      {text}
    </span>
  )
}