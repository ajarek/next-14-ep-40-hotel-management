import React from 'react'
import { ModeToggle } from '@/components/ModeToggle'
import Links from './Links'

const Navbar = async () => {
  return (
    <>
      <div className='h-16 w-full  flex justify-between items-center gap-4 px-8 '>
        <Links />
        <div className='flex justify-between items-center italic gap-6 ml-6'>
          <ModeToggle />
        </div>
      </div>
    </>
  )
}

export default Navbar
