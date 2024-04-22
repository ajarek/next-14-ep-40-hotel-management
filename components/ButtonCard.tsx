'use client'
import { Button } from './ui/button'
import { useRouter } from 'next/navigation'
const ButtonCard = ({ id }: { id: number }) => {
  const router = useRouter()
  return (
    <Button onClick={() => router.push(`/room/${id}`)}>BOOKED</Button>
  )
}

export default ButtonCard