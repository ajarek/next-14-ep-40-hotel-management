import { ToastAction } from '@/components/ui/toast'

const ToastAlert = ({ text, classToast }: { text: string, classToast: string }) => {
  return (
    <ToastAction
      className={`${ classToast }`}
      altText='Undo'
    >
      {text}
    </ToastAction>
  )
}

export default ToastAlert
