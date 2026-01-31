import Container from "@/app/components/common/container";
import Image from "next/image";

interface CurrencyDisplayProps {
    exchangeRateKrw: number;
    currencyCode: string;
    currencyName: string;
    changeRate: number;
}

export default function CurrencyDisplay(props: CurrencyDisplayProps) {
    const { exchangeRateKrw, currencyCode, currencyName, changeRate } = props;

    const isIncrease = changeRate > 0;
    const is0 = changeRate === 0;

    return (
        <Container backgroundColor="transparent" className='flex flex-col gap-2 items-start w-full'>
            <div className="flex w-full justify-between items-center gap-2">
                <p className="text-md font-bold text-gray-500">{currencyCode}</p>
                <p className="text-md font-light text-gray-500">{currencyName}</p>
            </div>
            <p className="text-2xl font-bold text-gray-900">{exchangeRateKrw.toLocaleString()} KRW</p>
            <div className='flex items-center'>
                { !is0 && ( isIncrease ? <Image src="/assets/upArrow.svg" alt="arrow-up" width={24} height={24} /> : <Image src="/assets/downArrow.svg" alt="arrow-down" width={24} height={24} /> )}
                <p className={`text-md font-normal text-gray-500 mt-[-2px] ${isIncrease ? 'text-main-red' : 'text-main-blue'}`}>{changeRate.toFixed(1)}%</p>
            </div>
        </Container>
    )
}