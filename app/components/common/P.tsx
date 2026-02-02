interface PProps extends React.HTMLAttributes<HTMLParagraphElement> {
    children: React.ReactNode;
    className?: string;
    element?: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    loading?: boolean;
    height?: number;
}

export default function P(props: PProps) {
    const { children, className, element: Element = 'p', loading = false, height, ...rest } = props;

    return (
        <Element
            className={
                `min-w-0 overflow-hidden text-ellipsis whitespace-nowrap 
            ${className} 
            ${loading && '!w-full bg-gray-100 rounded-sm animate-pulse'}`
            }
            style={{ height: height ? `${height}px` : 'auto' }}
            {...rest}
        >
            {loading ? '' : children}
        </Element>
    )
}
