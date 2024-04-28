import Payment from '@/components/Payment'
import React from 'react'

const Booking = ({ searchParams }: { searchParams: any }) => {
  const {
    firstDate,
    secondaryDate,
    adults,
    children,
    price,
    title,
    start,
    end,
  } = searchParams
  const first = new Date(firstDate)
  const second = new Date(secondaryDate)
  const period = (second.getTime() - first.getTime()) / (1000 * 60 * 60 * 24)

  return (
    <div className='min-h-[calc(100vh-64px)]  flex flex-col items-center justify-start px-24 pb-4 max-sm:px-4'>
      <h1 className='text-2xl font-semibold'>Your booked room</h1>
      <table className='w-full border-separate max-sm:border-collapse border-spacing-1 max-lg:table-auto mb-6'>
        <thead>
          <tr>
            <th className='border-2 border-primary py-4'>Name Room</th>
            <th className='border-2 border-primary py-4'>Start</th>
            <th className='border-2 border-primary py-4'>End</th>
            <th className='border-2 border-primary py-4 '>Booking days</th>
            <th className='border-2 border-primary py-4 max-sm:hidden'>Adults</th>
            <th className='border-2 border-primary py-4 max-sm:hidden'>Children</th>
            <th className='border-2 border-primary py-4 max-sm:hidden'>Price $</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='border-2 border-primary text-center py-4'>
              {title}
            </td>
            <td className='border-2 border-primary text-center py-4'>
              {start}
            </td>
            <td className='border-2 border-primary text-center py-4'>{end}</td>
            <td className='border-2 border-primary text-center py-4'>
              {period}
            </td>
            <td className='border-2 border-primary text-center py-4 max-sm:hidden'>
              {adults}
            </td>
            <td className='border-2 border-primary text-center py-4 max-sm:hidden'>
              {children}
            </td>
            <td className='border-2 border-primary text-center py-4 max-sm:hidden'>
              {(+price).toFixed(2)}
            </td>
          </tr>
        </tbody>
      </table>
      <Payment allPayValue={(price*period).toFixed(2)} />
    </div>
  )
}

export default Booking
