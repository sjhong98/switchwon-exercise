import P from "@/app/components/common/P";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
    textClassName?: string;
    size?: 'sm' | 'md' | 'lg';
    color?: 'primary' | 'main';
    disabled?: boolean;
}

export default function Button(props: ButtonProps) {
    const { children, onClick, className, textClassName, size = 'md', color = 'primary', disabled, ...rest } = props;

    const padding = size === 'sm' ? 'px-3 py-1 rounded-[8px]' : size === 'md' ? 'px-6 py-4 rounded-[12.5px]' : 'px-8 py-6 rounded-[25px]';
    return (
        <button
            id='button'
            className={
                `text-white cursor-pointer font-semibold transition-all duration-200 
            ${color === 'primary' ? 'bg-gray-900' : 'bg-main-blue'} 
            ${className} 
            ${padding} 
            ${disabled ? 'opacity-20 !cursor-default' : 'active:scale-[0.97] active:brightness-95'}
            `}
            onClick={onClick}
            disabled={disabled}
            {...rest}
        >
            <P className={textClassName}>{children}</P>
        </button>
    );
}