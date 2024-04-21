import Image from 'next/image'
import React from 'react'

const HeroImage = () => {
  return (
    <div className='w-full flex flex-col items-center'>
      <div className='w-[500px] h-[200px] rounded-2xl overflow-hidden '>
        <Image
          src='/images/hero1.jpg'
          alt='Hero Image'
          width={500}
          height={200}
          className='w-full h-full object-cover hover:scale-125 transition-all duration-500'
        />
      </div>
      <div  className='grid grid-cols-2 gap-4 mt-4'>
        <div className='w-[calc(250px-8px)] h-[200px] rounded-2xl overflow-hidden '>
          <Image
            src='/images/hero2.jpg'
            alt='Hero Image'
            width={250}
            height={200}
            className='w-full h-full object-cover hover:scale-125 transition-all duration-500'
          />
        </div>
        <div className='w-[calc(250px-8px)] h-[200px] rounded-2xl overflow-hidden '>
          <Image
            src='/images/hero3.jpg'
            alt='Hero Image'
            width={250}
            height={200}
            className='w-full h-full object-cover hover:scale-125 transition-all duration-500'
          />
        </div>
      </div>
    </div>
  )
}

export default HeroImage
