'use client'

import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/core';

import Image from "next/image"
import { classNames } from '@/utils/classNames'

import dogFood from '@/assets/images/dog-food.png'
import animalTransporters from '@/assets/images/animal-transporters.png'
import catFood from '@/assets/images/cat-food.png'
import arrowRight from '@/assets/arrow-right.svg'
import arrowLeft from '@/assets/arrow-left.svg'

const defaultSplideOptions = {
  start: 1,
  type: 'loop',
  clones: 3,
  gap: '60px',
  autoWidth: true,
  perPage: 3,
  focus: 'center',
}

export default function FundraisingAnimals({ dictionary }) {
  const fundraisingAnimals = [
    {
      title: dictionary.fundraisingAnimalsList['1'].title,
      image: dogFood,
      alt: 'dog-food',
      link: '#',
      isImportant: false,
    },
    {
      title: dictionary.fundraisingAnimalsList['2'].title,
      image: animalTransporters,
      alt: 'animal-transporters',
      link: '#',
      isImportant: false,
    },
    {
      title: dictionary.fundraisingAnimalsList['3'].title,
      image: catFood,
      alt: 'cat-food',
      link: '#',
      isImportant: false,
    },
  ]

  return (
    <Splide
      hasTrack={ false }
      aria-label="Support animals"
      options={defaultSplideOptions}
    >
      <div className="relative flex justify-center items-center">
        <div className="splide__arrows flex justify-center absolute left-9 min-[1620px]:hidden z-10">
          <button className="splide__arrow splide__arrow--prev">
              <Image src={arrowLeft} alt="arrow-left" />
          </button>
        </div>
        <SplideTrack className="basis-[1400px]">
          {
            fundraisingAnimals.map((fundraising, index) => (
              <SplideSlide key={index}>
                <div
                  className={classNames(
                    "h-full rounded-3xl w-[406px] pb-[38px] pt-[35px] px-[26px] bg-black hover:bg-blue",
                    fundraising.isImportant ? "border-4 border-red" : ""
                  )}
                >
                  <div className="flex flex-col items-center gap-y-5 h-full">
                    <div className="flex items-center justify-center basis-[359px]">
                      <Image src={fundraising.image} priority={false} alt={fundraising.alt} />
                    </div>
                    <div className="flex-1 flex flex-col justify-between items-center gap-y-11">
                      <div>
                        <p className="text-2xl font-semibold uppercase text-center">
                          {fundraising.title}
                        </p>
                      </div>
                      <a className="button button_medium button_white" href={fundraising.link}>
                        {dictionary.support}
                      </a>
                    </div>
                  </div>
                </div>
              </SplideSlide>
            ))
          }
        </SplideTrack>
        <div className="splide__arrows flex justify-center absolute right-9 min-[1620px]:hidden z-10">
          <button className="splide__arrow splide__arrow--next">
              <Image src={arrowRight} alt="arrow-right" />
          </button>
        </div>
      </div>
    </Splide>
  )
}