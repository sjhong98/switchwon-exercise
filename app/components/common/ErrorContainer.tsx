import Button from "./Button";
import Container from "./Container";
import P from "./P";

interface ErrorContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    refetch: () => void;
    className?: string;
}

export default function ErrorContainer(props: ErrorContainerProps) {
    const { refetch, className, ...rest } = props;

    return (
        <Container backgroundColor="transparent" className={`flex flex-col items-center justify-center w-full gap-2 overflow-hidden ${className}`} {...rest}>
            <P className="text-md font-light text-gray-800">에러가 발생했습니다.</P>
            <Button onClick={refetch} size="sm" color="main">재시도</Button>
        </Container>
    )
}