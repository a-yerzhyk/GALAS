'use client'

import Image from "next/image";
import { useEffect } from "react";

import arrowRight from '@/assets/arrow-right.svg'
import arrowLeft from '@/assets/arrow-left.svg'
import { classNames } from "@/utils/classNames";

export default function ImagePreview ({
  currentImage,
  onClose,
  onNext,
  onPrev,
  canNext,
  canPrev
}) {
  useEffect(() => {
    if (currentImage) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [currentImage])

  const handleNextReport = (event) => {
    event.stopPropagation()
    onNext()
  }

  const handlePreviousReport = (event) => {
    event.stopPropagation()
    onPrev()
  }

  const onKeypress = (event) => {
    if (event.key === "Escape") {
      onClose()
    }
    if (event.key === "ArrowRight") {
      onNext()
    }
    if (event.key === "ArrowLeft") {
      onPrev()
    }
  }
  
  useEffect(() => {
    document.addEventListener("keydown", onKeypress, false);

    return () => {
      document.removeEventListener("keydown", onKeypress, false);
    }
  })

  return (
    <>
      { currentImage &&
        <div onClick={() => onClose()} className="fixed left-0 top-0 w-screen h-screen z-10 sm:p-[56px]">
          <div className="relative outline sm:outline-[100px] outline-black-secondary flex items-center justify-center sm:border-[3px] border-yellow sm:rounded-2xl h-full w-full">
            <div className="absolute w-full h-full backdrop-blur-md -z-10"></div>
            <Image
              className={classNames(
                "w-fit max-lg:h-10 absolute max-sm:left-6 max-sm:top-[85%] sm:left-5 xl:left-[100px] cursor-pointer",
                canPrev ? "" : "opacity-50"
              )}
              src={arrowLeft}
              alt="Previous report"
              onClick={handlePreviousReport}
            />
            <Image placeholder="blur" height="700" src={currentImage} alt="Image report" priority={false} />
            {/* {currentImage} */}
            <Image
              className={classNames(
                "w-fit max-lg:h-10 absolute max-sm:right-6 max-sm:top-[85%] sm:right-5 xl:right-[100px] cursor-pointer",
                canNext ? "" : "opacity-50"
              )}
              src={arrowRight}
              alt="Next report"
              onClick={handleNextReport}
            />
          </div>
        </div>
      }
    </>
  )
}