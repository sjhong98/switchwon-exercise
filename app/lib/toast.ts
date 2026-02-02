import { toast } from "react-toastify";

export const errorToast = (message: string) => {
    toast.error(message, { hideProgressBar: true, autoClose: 1500, toastId: message });
}

export const successToast = (message: string) => {
    toast.success(message, { hideProgressBar: true, autoClose: 1500, toastId: message });
}