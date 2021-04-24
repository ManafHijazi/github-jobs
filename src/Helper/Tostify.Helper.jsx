import { toast } from 'react-toastify';

// Methods to show error and success messages

export const showSuccess = (message, conifgration = { autoClose: 3000 }) =>
  toast.success(message, conifgration);

export const showError = (message, conifgration = { autoClose: 3000 }) =>
  toast.error(message, conifgration);

export const showWarn = (message, conifgration = { autoClose: 3000 }) =>
  toast.warn(message, conifgration);

export const showinfo = (message, conifgration = { autoClose: 3000 }) =>
  toast.info(message, conifgration);
