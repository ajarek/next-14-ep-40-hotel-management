import Image from 'next/image'
import apartments from '../../data/apartments.json'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import Search from '@/components/Search'
import ButtonCard from '@/components/ButtonCard'
import { auth } from '@/app/api/auth/auth'
import { redirect } from 'next/navigation'
const Rooms =async () => {
  const session = await auth()

  if (!session) {
    redirect('/register')
  }
  return (
    <main className='w-full flex min-h-screen flex-col items-center justify-between px-24 py-12 max-sm:px-4'>
      <Search />
      <div className='w-full grid grid-cols-3 gap-4 max-lg:grid-cols-2 max-sm:grid-cols-1 2xl:grid-cols-4'>

        {apartments.map((apartment) => (
          <Card key={apartment.id}>
            <CardHeader>
              <CardTitle className='w-[100%] h-[200px] rounded-sm overflow-hidden max-lg:w-full '>
                <Image
                  src={apartment.img[0]}
                  alt={apartment.title}
                  width={300}
                  height={200}
                  className='w-full h-full object-cover hover:scale-125 transition-all duration-500'
                />
              </CardTitle>
              <CardContent className='flex justify-between text-xl font-semibold p-0'>
                <div>{apartment.title}</div>
                <div>$ {apartment.price}</div>
              </CardContent>
              <CardDescription>
                {apartment.description.slice(0, 80)}...
              </CardDescription>
            </CardHeader>
            <CardFooter>
            <ButtonCard id={apartment.id}/>
            </CardFooter>
          </Card>
        ))}
      </div>
    </main>
  )
}

export default Rooms
