import { useRef } from "react";
import Input, { InputProps } from "./Input";

interface SuffixInputProps extends InputProps {
    suffix: string;
}

export default function SuffixInput(props: SuffixInputProps) {
    const { label, suffix, className, ...rest } = props;

    const suffixRef = useRef<HTMLParagraphElement>(null);

    return (
        <div id='suffix-input' className='flex flex-col w-full gap-2 relative'>
            <Input label={label} className={`text-right ${className}`} style={{ paddingRight: `${24 + (suffixRef.current?.clientWidth ?? 0)}px` }} {...rest} />
            <p ref={suffixRef} className='absolute z-[2] bottom-[19px] right-5 text-sm font-normal text-gray-500 text-right'>{suffix}</p>
        </div>
    )
}