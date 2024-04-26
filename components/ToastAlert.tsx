import { ToastAction } from '@/components/ui/toast'

const ToastAlert = () => {
  return (
    <ToastAction
      className='bg-red-500 text-white'
      altText='Undo'
    >
      Please complete all fields correctly!
    </ToastAction>
  )
}

export default ToastAlert
