'use client'

import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/core';

import Image from "next/image"
import FundraisingItem from './FundraisingItem';

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
      link: '#support',
      isImportant: false,
    },
    {
      title: dictionary.fundraisingAnimalsList['2'].title,
      image: animalTransporters,
      alt: 'animal-transporters',
      link: '#support',
      isImportant: false,
    },
    {
      title: dictionary.fundraisingAnimalsList['3'].title,
      image: catFood,
      alt: 'cat-food',
      link: '#support',
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
        <div className="splide__arrows flex justify-center absolute left-9 min-[1620px]:hidden max-sm:w-[50px] max-sm:left-3 z-10">
          <button className="splide__arrow splide__arrow--prev">
              <Image src={arrowLeft} alt="arrow-left" />
          </button>
        </div>
        <SplideTrack className="basis-[1400px]">
          {
            fundraisingAnimals.map((fundraising, index) => (
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
        <div className="splide__arrows flex justify-center absolute right-9 min-[1620px]:hidden max-sm:w-[50px] max-sm:right-3 z-10">
          <button className="splide__arrow splide__arrow--next">
              <Image src={arrowRight} alt="arrow-right" />
          </button>
        </div>
      </div>
    </Splide>
  )
}