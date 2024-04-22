import Image from 'next/image'
import apartments from '../../../data/apartments.json'

const Room = ({ params }: { params: { id: string } }) => {
  const apartment = apartments.find(
    (apartment) => apartment.id === parseInt(params.id)
  )
  return (
    <main className='flex min-h-screen flex-col items-center justify-between px-24 py-12 max-lg:px-4'>
      <div className='w-full h-full grid grid-cols-2 gap-8 max-lg:grid-cols-1 '>
        <div className='w-full h-full flex justify-center items-center rounded-lg overflow-hidden max-lg:w-full  '>
          <Image
            src={apartment?.img[0] || ''}
            alt={apartment?.title || ''}
            width={400}
            height={300}
            className='w-full h-[400px] object-cover hover:scale-125 transition-all duration-500'
          />
        </div>
        <div className='grid grid-cols-2 gap-4 place-items-start  max-sm:grid-cols-1'>
        <div className='w-full h-[200px] flex justify-center items-center rounded-lg overflow-hidden max-lg:w-full  '>
          <Image
            src={apartment?.img[1] || ''}
            alt={apartment?.title || ''}
            width={400}
            height={300}
            className='w-full h-full object-cover hover:scale-125 transition-all duration-500'
          />
        </div>
        <div className='w-full h-[200px] flex justify-center items-center rounded-lg overflow-hidden max-lg:w-full  '>
          <Image
            src={apartment?.img[2] || ''}
            alt={apartment?.title || ''}
            width={400}
            height={300}
            className='w-full h-full object-cover hover:scale-125 transition-all duration-500'
          />
        </div>
        </div>
      </div>
      <div></div>
    </main>
  )
}

export default Room
