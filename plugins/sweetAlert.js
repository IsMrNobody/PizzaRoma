import Swal from 'sweetalert2'

const toastConfig = {
  toast: true,
  timer: 800,
  position: 'bottom',
  background: '#0f0f0f',
  showConfirmButton: false,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
}

export const toast = Swal.mixin(toastConfig)

const successConfig = {
  timer: 1000,
  icon: 'success',
  background: '#565D47',
  showConfirmButton: false,
  position: 'top-right',
  toast,
  width: '250px',
  color: '#EAAC9D'
}

export const success = Swal.mixin(successConfig)

const errorConfig = {
  timer: 2000,
  icon: 'error',
  background: '#0f0f0f',
  showConfirmButton: false
}

export const error = Swal.mixin(errorConfig)