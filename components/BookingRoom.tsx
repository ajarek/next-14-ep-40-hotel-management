'use client'
import React from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { Label } from '@/components/ui/label'
import DatePicker from './DatePicker'
import { useRouter } from 'next/navigation'
import { ToastAction } from '@/components/ui/toast'
import { useToast } from '@/components/ui/use-toast'

const BookingRoom = ({ price, title }: { price: number; title: string }) => {
  const { toast } = useToast()
  const router = useRouter()

  const toastAlert = () => {
    toast({
      variant: 'destructive',
      title: 'Uh oh! Something went wrong.',
      description: 'Please complete all fields correctly!',
      action: <ToastAction altText='Try again'>Try again</ToastAction>,
    })
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    const today = new Date()
    const first = new Date(e.target[0].innerText)
    const second = new Date(e.target[1].innerText)
    const period = (second.getTime() - first.getTime()) / (1000 * 60 * 60 * 24)
    const todayDate = first.getDate() - today.getDate()

    if (
      todayDate >= 0 &&
      period > 0 &&
      e.target[0].innerText !== 'Check in date' &&
      e.target[1].innerText !== 'Check out date' &&
      e.target[2].value &&
      e.target[3].value
    ) {
      router.push(
        `/booking/?firstDate=${e.target[0].innerText}&secondaryDate=${e.target[1].innerText}&adults=${e.target[2].value}&children=${e.target[3].value}&price=${price}&title=${title}&start=${e.target[0].innerText}&end=${e.target[1].innerText}`
      )
    } else {
      toastAlert()
    }
  }

  return (
    <div className='w-full min-h-screen    flex flex-col justify-evenly items-start p-2 shadow-2xl '>
      <h1 className='w-full text-3xl  font-bold border-b-2 border-primary pb-2'>
        Book Your Room
      </h1>
      <h2>Fee $ {price}/day</h2>
      <p>
        Check-in time is 12:00 PM, checkout time is 11:59 AM. If you leave
        behind any items, please contact the receptionist.
      </p>

      <form
        onSubmit={handleSubmit}
        className='w-full flex flex-col gap-8'
      >
        <div className='grid grid-cols-2 gap-4'>
          <DatePicker label='Check in date' />
          <DatePicker label='Check out date' />
        </div>
        <div className='grid grid-cols-2 gap-4'>
          <div className='flex flex-col gap-4'>
            <Label htmlFor='adults'>Adults</Label>
            <Input
              type='number'
              defaultValue={1}
              min={1}
              max={4}
              required
              id='adults'
            />
          </div>
          <div className='flex flex-col gap-4'>
            <Label htmlFor='children'>Children</Label>
            <Input
              type='number'
              defaultValue={0}
              min={0}
              max={4}
              required
              id='children'
            />
          </div>
        </div>

        <Button className=' '>Booked</Button>
      </form>
    </div>
  )
}

export default BookingRoom
