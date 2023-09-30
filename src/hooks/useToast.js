'use client'

import { useEffect, useRef, useState } from 'react'
import { createRoot } from 'react-dom/client'
import Toast from '@/components/Toast'

export function useToast() {
  const [toastMessage, setToastMessage] = useState(null)
  const timeoutRef = useRef(null)

  const showToastMessage = (message, duration = 3000) => {
    setToastMessage(message)

    if (timeoutRef.current) clearTimeout(timeoutRef.current)

    timeoutRef.current = setTimeout(() => {
      setToastMessage(null)
    }, duration || 3000)
  }

  useEffect(() => {
    if (!toastMessage) return

    const toastElement = document.createElement('div')
    toastElement?.classList.add('toast_show')
    document.body.appendChild(toastElement)

    const root = createRoot(toastElement)
    root.render(<Toast message={toastMessage} />)

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
      toastElement?.classList.add('toast_hide')

      setTimeout(() => {
        if (document.body.contains(toastElement)) {
          document.body.removeChild(toastElement)
        }
      }, 300)
    }
  }, [toastMessage])

  return { showToast: showToastMessage }
}