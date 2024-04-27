'use client'
import { Button } from '@/components/ui/button'
import Progress from './Progress'
import { useRouter } from 'next/navigation'
const FeaturedInfo = () => {
  const router = useRouter()
  return (
    <div className='flex flex-col  items-start justify-start gap-6  '>
      <h1 className='text-5xl font-bold'>Featured Room</h1>
      <p>
      A spacious and luxurious suite with stunning views. Enjoy the comfort and elegance of this beautiful suite, complete with modern amenities and breathtaking vistas of the city skyline.
      </p>
      <p className='text-2xl'>Start From $ 150</p>
      <Button onClick={() => router.push('/rooms')} size='lg'  className='self-end max-lg:self-center'>More Details</Button>
      
    </div>
  )
}

export default FeaturedInfo
