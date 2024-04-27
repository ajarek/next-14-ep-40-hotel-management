import * as React from 'react'

import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import Image from 'next/image'
const imageArray = [
  '/images/basic-1.webp',
  '/images/deluxe-1.webp',
  '/images/executive-1.webp',
  '/images/family-1.webp',
  '/images/newlywed-1.webp',
]
export function CarouselSize() {
  return (
    <Carousel
      opts={{
        align: 'start',
      }}
      className='w-full '
    >
      <CarouselContent>
        {imageArray.map((_, index) => (
          <CarouselItem
            key={index}
            className='md:basis-1/2 lg:basis-1/3'
          >
            
              <Card>
                <CardContent className='w-full h-[200px] rounded-sm overflow-hidden max-lg:w-full   '>
                  <Image
                    src={imageArray[index]}
                    alt='image'
                    width={300}
                    height={200}
                    className='w-full h-full object-cover hover:scale-125 transition-all duration-500'
                  />
                </CardContent>
              </Card>
            
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
