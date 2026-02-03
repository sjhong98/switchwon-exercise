import { toast } from "react-toastify";

export const errorToast = (message: string, useMessageAsId?: boolean) => {
    const _toastId = useMessageAsId ? message : undefined;
    toast.error(message, { hideProgressBar: true, autoClose: 1500, toastId: _toastId });
}

export const successToast = (message: string, useMessageAsId?: boolean) => {
    const _toastId = useMessageAsId ? message : undefined;
    toast.success(message, { hideProgressBar: true, autoClose: 1500, toastId: _toastId });
}