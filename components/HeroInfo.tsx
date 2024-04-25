'use client'
import { Button } from '@/components/ui/button'
import Progress from './Progress'
import { useRouter } from 'next/navigation'
const HeroInfo = () => {
  const router = useRouter()
  return (
    <div className='flex flex-col  items-start justify-start gap-6  '>
      <h1 className='text-5xl font-bold'>Explore Our Exquisite Hotel</h1>
      <p>
        Experience an Exquisite Hotel Immersed in Rich History and Timeless
        Elegance
      </p>
      <Button onClick={() => router.push('/rooms')} size='lg'  className='max-lg:self-center'>Get Started</Button>
      <div className='w-full grid grid-cols-3 gap-4 place-items-start max-lg:place-items-center max-lg:grid-cols-2 max-sm:grid-cols-1'>
        <div className='flex flex-col items-center gap-4'>
          <p>Basic Room</p>
         <Progress endValue={50} duration={1500}/>
        </div>
        <div className='flex flex-col items-center gap-4'>
          <p>Luxury Room</p>
          <Progress endValue={120} duration={1800}/>
        </div>
        <div className='flex flex-col items-center gap-4'>
          <p>Suite Room</p>
          <Progress endValue={60} duration={2000}/>
        </div>
      </div>
    </div>
  )
}

export default HeroInfo
