
import { memo } from 'react'
import Image from "next/image"
import { classNames } from '@/utils/classNames'

const FundraisingItem = memo(function ({
  title,
  description,
  image,
  link,
  isImportant,
  dictionary
}) {
  return (
    <div
      className={classNames(
        "relative h-full rounded-3xl w-[300px] sm:w-[406px] pb-[69px] pt-[42px] px-[26px] bg-black-secondary hover:bg-blue",
        isImportant ? "border-4 border-red-dark" : ""
      )}
    >
      {
        isImportant &&
        <div className="important-mark">
          {dictionary.important}
        </div>
      }
      <div className="flex flex-col items-center gap-y-5 h-full">
        <div className="flex items-center justify-center basis-[359px]">
          <Image src={image.src} priority={false} alt={image.alt} />
        </div>
        <div className="flex-1 flex flex-col justify-between items-center gap-y-11">
          <div>
            <p className="text-2xl font-semibold uppercase text-center">
              {title}
            </p>
            {
              description &&
              <p className="text-sm text-center mt-6">
                {description}
              </p>
            }
          </div>
          <a className="button button_medium button_white" href={link}>
            {dictionary.support}
          </a>
        </div>
      </div>
    </div>
  )
})

export default FundraisingItem