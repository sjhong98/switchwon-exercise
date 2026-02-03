import { useEffect, useMemo, useRef, useState } from "react";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    className?: string;
    errorMessage?: string;
}

export default function Input(props: InputProps) {
    const { label, className, type, errorMessage, ...rest } = props;

    const timerRef = useRef<NodeJS.Timeout | null>(null);
    const [_errorMessage, setErrorMessage] = useState<string | undefined>(errorMessage);
    const inputId = useMemo(() => `${rest.id ?? 'input'}-error-message`, [rest.id])

    useEffect(() => {
        if (errorMessage) {
            if (timerRef.current) clearTimeout(timerRef.current);
            setErrorMessage(errorMessage);
            const errorMessageElement = document.getElementById(inputId)
            if (errorMessageElement) {
                errorMessageElement.style.animation = 'toastShowDown 0.2s ease-in-out'
            }
        } else {
            const errorMessageElement = document.getElementById(inputId)
            if (errorMessageElement) {
                errorMessageElement.style.animation = 'toastHideUp 0.2s ease-in-out'
            }
            timerRef.current = setTimeout(() => {
                setErrorMessage(undefined);
            }, 180);
        }
    }, [errorMessage])

    return (
        <div id='input' className='flex flex-col w-full h-auto gap-2 relative'>
            {label && (
                <label htmlFor={rest.id} className='min-w-0 block text-sm text-left font-normal text-gray-500 overflow-hidden text-ellipsis whitespace-nowrap'>{label}</label>
            )}
            <input type="text" className={`w-full p-2 px-6 py-4 rounded-[12.5px] border border-gray-400 bg-white outline-none z-[2] ${errorMessage && '!border-red-500'} ${className}`} autoComplete="off" {...rest} />
            <p id={inputId} className={`absolute top-[calc(100%+4px)] right-4 text-sm font-normal text-red-500 text-right z-[1]`}>{_errorMessage}</p>
        </div>
    )
}