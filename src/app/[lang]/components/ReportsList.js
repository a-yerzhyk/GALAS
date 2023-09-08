'use client'

import { useEffect, useState } from "react"
import Image from "next/image"
import ImagePreview from "./ImagePreview"

import reports from '@/service/reports'

export default function ReportsList() {
  const [imagePreview, setImagePreview] = useState(null)
  const [currentReportIndex, setCurrentReportIndex] = useState(null)

  const handleImageClick = (index) => {
    setCurrentReportIndex(index)
  }

  const nextReport = () => {
    if (currentReportIndex < reports.length - 1) {
      setCurrentReportIndex(currentReportIndex + 1)
    }
  }

  const previousReport = () => {
    if (currentReportIndex !== 0) {
      setCurrentReportIndex(currentReportIndex - 1)
    }
  }

  useEffect(() => {
    if (currentReportIndex === null) {
      setImagePreview(null)
    } else {
      setImagePreview(reports[currentReportIndex].src)
    }
  }, [currentReportIndex])

  return (
    <>
      <div className="space-y-4 space-x-4">
        {
          reports.map((image, index) => (
            <Image
              width="200"
              key={index}
              className="inline cursor-pointer"
              src={image.src}
              alt={image.alt}
              priority={false}
              onClick={() => handleImageClick(index)}
            />
          ))
        }
      </div>
      <ImagePreview
        currentImage={imagePreview}
        onClose={() => setCurrentReportIndex(null)}
        onNext={nextReport}
        onPrev={previousReport}
        canNext={currentReportIndex < reports.length - 1}
        canPrev={currentReportIndex !== 0}
      />
    </>
  )
}