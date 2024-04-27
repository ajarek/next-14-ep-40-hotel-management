import { CarouselSize } from '@/components/CarouselSize'
import Featured from '@/components/Featured'
import FeaturedInfo from '@/components/FeaturedInfo'
import HeroImage from '@/components/HeroImage'
import HeroInfo from '@/components/HeroInfo'
import Search from '@/components/Search'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-start px-24 py-12 max-lg:px-4 gap-8'>
      <div className='grid grid-cols-2 gap-8 max-lg:grid-cols-1 place-items-start '>
        <HeroInfo />
        <HeroImage />
      </div>
      <Search />
      <div className='grid grid-cols-2 gap-8 max-lg:grid-cols-1 place-items-start '>
        <Featured />
        <FeaturedInfo />
      </div>
      <CarouselSize/>
    </main>
  )
}
