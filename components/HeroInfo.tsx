import { Button } from '@/components/ui/button'
import Progress from './Progress'

const HeroInfo = () => {
  return (
    <div className='flex flex-col min-h-[calc(100vh-184px)] items-start justify-center gap-6 '>
      <h1 className='text-5xl font-bold'>Explore Our Exquisite Hotel</h1>
      <p>
        Experience an Exquisite Hotel Immersed in Rich History and Timeless
        Elegance
      </p>
      <Button size='lg'>Get Started</Button>
      <div className='w-full grid grid-cols-3 gap-4 place-items-start'>
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
