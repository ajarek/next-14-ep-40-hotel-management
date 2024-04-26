'use client'


import { useRouter } from 'next/navigation'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { Label } from './ui/label'

const Payment = ({ allPayValue }: { allPayValue: string }) => {
  const router = useRouter()

  
  const handleSubmit = async (e: any) => {
    e.preventDefault()
   alert('Payment Successful')
    setTimeout(() => {
      router.push('/')
    }, 2000)
  }

  return (
    <>
      
      <form
        onSubmit={handleSubmit}
        className='max-w-[600px] w-full max-sm:w-full bg-secondary p-6 max-sm:p-4 rounded-lg shadow-lg'
      >
        <div className='w-100%'>
          <Label htmlFor='cardNumber'>Payment amount $</Label>
          <Input
            type='text'
            value={allPayValue}
            readOnly
            className='text-xl'
          />
        </div>

        <div className='w-full'>
          <Label htmlFor='cardNumber'>Enter your Payment Card Number</Label>
          <Input
            type='text'
            placeholder='1234 5678 9012 3456'
            required
            pattern='^(?:\d{4} ){3}\d{4}$'
          />
        </div>
        <div className='w-full '>
          <Label htmlFor='expiryDate'>Validity of the Card</Label>
          <Input
            type='text'
            placeholder='MM/YYYY'
            required
            pattern='^(0[1-9]|1[0-2])\/20[2-9][4-9]$'
          />
        </div>

        <div className='w-full'>
          <Label htmlFor='cvv'>Enter CVV</Label>
          <Input
            type='text'
            placeholder='123'
            required
            pattern='^[0-9]{3}$'
          />
        </div>

        <div className='w-full  mt-4'>
          <Button
            className='w-full'
            type='submit'
          >
            I pay by card
          </Button>
        </div>
      </form>
    </>
  )
}

export default Payment