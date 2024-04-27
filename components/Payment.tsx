'use client'

import * as React from 'react'
import { useRouter } from 'next/navigation'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { Label } from './ui/label'
import { useToast } from '@/components/ui/use-toast'

const Payment = ({ allPayValue }: { allPayValue: string }) => {
  const router = useRouter()
  const { toast } = useToast()

  const showAlert = () => {
    toast({
      className: 'bg-green-500 text-white',
      title: `Payment of $ ${allPayValue} Successful`,
      description: 'Thank you very much and we invite you.',
    })
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    showAlert()

    setTimeout(() => {
      router.push('/')
    }, 2000)
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className='max-w-[600px] w-full max-sm:w-full bg-secondary p-6 max-sm:p-4 rounded-lg shadow-lg relative'
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
