export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    className?: string;
}

export default function Input(props: InputProps) {
    const { label, className, ...rest } = props;

    return (
        <div id='input' className='flex flex-col w-full gap-2 h-auto'>
            { label && (
                <label htmlFor={rest.id} className='block text-sm font-normal text-gray-500 text-left'>{label}</label>
            ) }
            <input type="text" className={`w-full p-2 rounded-[12.5px] border border-gray-400 bg-white outline-none px-6 py-4 ${className}`} {...rest} />
        </div>
    )
}