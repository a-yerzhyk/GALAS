'use client'

import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/core';

import Image from 'next/image'
import { classNames } from '@/utils/classNames'

import helmet from '@/assets/images/helmet.png'
import drone from '@/assets/images/drone.png'
import generator from '@/assets/images/generator.png'
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

export default function FundraisingCarousel({ dictionary }) {
  const fundraisings = [
    {
      title: dictionary.fundraisingArmyList['1'].title,
      description: dictionary.fundraisingArmyList['1'].description,
      image: helmet,
      alt: 'helmet',
      link: '#',
      isImportant: false,
    },
    {
      title: dictionary.fundraisingArmyList['2'].title,
      description: dictionary.fundraisingArmyList['2'].description,
      image: drone,
      alt: 'drone',
      link: '#',
      isImportant: true,
    },
    {
      title: dictionary.fundraisingArmyList['3'].title,
      description: dictionary.fundraisingArmyList['3'].description,
      image: generator,
      alt: 'generator',
      link: '#',
      isImportant: false,
    }
  ]

  return (
    <Splide
      hasTrack={ false }
      aria-label="Support army"
      options={defaultSplideOptions}
    >
      <div className="relative flex justify-center min-[1620px]:justify-between items-center">
        <div className="splide__arrows flex justify-center absolute left-9 min-[1620px]:static min-[1620px]:flex-1 z-10">
          <button className="splide__arrow splide__arrow--prev">
              <Image src={arrowLeft} alt="arrow-left" />
          </button>
        </div>
        <SplideTrack className="basis-[1400px]">
          {
            fundraisings.map((fundraising, index) => (
              <SplideSlide key={index}>
                <div
                  className={classNames(
                    "relative h-full rounded-3xl w-[406px] pb-[69px] pt-[42px] px-[26px] bg-black-secondary hover:bg-blue",
                    fundraising.isImportant ? "border-4 border-red-dark" : ""
                  )}
                >
                  {
                    fundraising.isImportant &&
                    <div className="important-mark">
                      {dictionary.important}
                    </div>
                  }
                  <div className="flex flex-col items-center gap-y-5 h-full">
                    <div className="flex items-center justify-center basis-[359px]">
                      <Image src={fundraising.image} priority={false} alt={fundraising.alt} />
                    </div>
                    <div className="flex-1 flex flex-col justify-between items-center gap-y-11">
                      <div>
                        <p className="text-2xl font-semibold uppercase text-center mb-6">
                          {fundraising.title}
                        </p>
                        <p className="text-sm text-center">
                          {fundraising.description}
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
        <div className="splide__arrows flex justify-center absolute right-9 min-[1620px]:static min-[1620px]:flex-1 z-10">
          <button className="splide__arrow splide__arrow--next">
              <Image src={arrowRight} alt="arrow-right" />
          </button>
        </div>
      </div>
    </Splide>
  )
}