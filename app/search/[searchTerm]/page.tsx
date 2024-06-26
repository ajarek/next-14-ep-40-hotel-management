import Image from 'next/image'
import apartments from '../../../data/apartments.json'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import  Link  from 'next/link'
import ButtonCard from '@/components/ButtonCard'

const SerachPage = async ({ params }: { params: { searchTerm: string } }) => {
  const { searchTerm } = params
  return(
    <main className='flex min-h-screen flex-col items-center justify-between px-24 py-12'>
   
    <div className='grid grid-cols-3 gap-4 max-lg:grid-cols-2 max-sm:grid-cols-1 2xl:grid-cols-4'>

      {apartments
      .filter((apartment) => apartment.title.toLowerCase().includes(searchTerm.toLowerCase()))
      .map((apartment) => (
        <Card key={apartment.id}>
         
          <CardHeader>
            <CardTitle className='w-[300px] h-[200px] rounded-sm overflow-hidden max-lg:w-full '>
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
export default SerachPage