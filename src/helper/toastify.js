import { toast } from 'react-toastify';

export const flashSuccess = message => {
  if (message)
    toast.success(message)
}

export const flashDanger = message => {
  if (message)
    toast.error(message)
}

export const flashWarning = message => {
  if (message)
    toast.warn(message)
}
