'use client'

import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/core';

import Image from 'next/image'
import FundraisingItem from './FundraisingItem';

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
      // description: dictionary.fundraisingArmyList['1'].description,
      image: helmet,
      alt: 'helmet',
      link: '#support',
      isImportant: false,
    },
    {
      title: dictionary.fundraisingArmyList['2'].title,
      description: dictionary.fundraisingArmyList['2'].description,
      image: drone,
      alt: 'drone',
      link: '#support',
      isImportant: true,
    },
    {
      title: dictionary.fundraisingArmyList['3'].title,
      description: dictionary.fundraisingArmyList['3'].description,
      image: generator,
      alt: 'generator',
      link: '#support',
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
        <div className="splide__arrows flex justify-center absolute left-9 min-[1620px]:static min-[1620px]:flex-1 max-sm:w-[50px] max-sm:left-3 z-10">
          <button className="splide__arrow splide__arrow--prev">
              <Image src={arrowLeft} alt="arrow-left" />
          </button>
        </div>
        <SplideTrack className="basis-[1400px]">
          {
            fundraisings.map((fundraising, index) => (
              <SplideSlide key={index}>
                <FundraisingItem
                  title={fundraising.title}
                  description={fundraising.description}
                  image={{
                    src: fundraising.image,
                    alt: fundraising.alt
                  }}
                  link={fundraising.link}
                  isImportant={fundraising.isImportant}
                  dictionary={dictionary}
                />
              </SplideSlide>
            ))
          }
        </SplideTrack>
        <div className="splide__arrows flex justify-center absolute right-9 min-[1620px]:static min-[1620px]:flex-1 max-sm:w-[50px] max-sm:right-3 z-10">
          <button className="splide__arrow splide__arrow--next">
              <Image src={arrowRight} alt="arrow-right" />
          </button>
        </div>
      </div>
    </Splide>
  )
}