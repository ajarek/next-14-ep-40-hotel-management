import { ToastAction } from '@/components/ui/toast'

const ToastAlert = () => {
  return (
    <ToastAction
      className='bg-red-500'
      altText='Undo'
    >
      Please complete all fields correctly!
    </ToastAction>
  )
}

export default ToastAlert
