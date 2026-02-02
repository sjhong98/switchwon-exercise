import Container from "@/app/components/common/container";
import { CurrencyName, CurrencyEnum } from "@/app/enums/currencyEnum";
import useExchangeRate from "@/app/hooks/useExchangeRate";
import formatNumber from "@/app/lib/formatNumber";
import normalizeCurrent from "@/app/lib/normalizeCurrent";
import Image from "next/image";
import P from "@/app/components/common/P";
import ErrorContainer from "../../common/ErrorContainer";

interface CurrencyDisplayProps {
    exchangeRateKrw: number;
    currencyCode: string;
    currencyName: string;
    changeRate: number;
    loading: boolean;
}

function CurrencyDisplay(props: CurrencyDisplayProps) {
    const { exchangeRateKrw, currencyCode, currencyName, changeRate, loading } = props;

    const isIncrease = changeRate > 0;
    const is0 = changeRate === 0;

    return (
        <Container backgroundColor="transparent" className='flex flex-col gap-2 items-start w-full overflow-hidden'>
            <div className="flex w-full justify-between items-center gap-2 overflow-hidden">
                <P className="text-md font-bold text-gray-500">{currencyCode}</P>
                <P className="text-sm font-light text-gray-500">{currencyName}</P>
            </div>
            <P className="text-2xl font-bold text-gray-900 w-full" loading={loading} height={32}>{formatNumber(exchangeRateKrw)} KRW</P>
            <div className='flex items-center w-full'>
                {!is0 ? (isIncrease ? <Image src="/assets/upArrow.svg" alt="arrow-up" width={24} height={24} /> : <Image src="/assets/downArrow.svg" alt="arrow-down" width={24} height={24} />) : <div className="w-1 h-6" />}
                <P className={`text-md font-normal text-gray-500 mt-[-2px] ${isIncrease ? 'text-main-red' : 'text-main-blue'}`} loading={loading} height={24}>{formatNumber(changeRate, 1, 1)}%</P>
            </div>
        </Container>
    )
}

export default function CurrencyDisplayPanel() {
    const { exchangeRateData, exchangeRateLoading, exchangeRateError, refetchExchangeRate } = useExchangeRate();

    return (
        <div className='flex w-full gap-4'>
            {exchangeRateError ? (
                <ErrorContainer refetch={refetchExchangeRate} />
            ) : (
                <>
                    <CurrencyDisplay
                        exchangeRateKrw={exchangeRateData ? normalizeCurrent(exchangeRateData[1].rate, exchangeRateData[1].currency) : 0}
                        currencyCode={CurrencyEnum.USD}
                        currencyName={CurrencyName.USD}
                        changeRate={exchangeRateData ? exchangeRateData[1].changePercentage : 0}
                        loading={exchangeRateLoading}
                    />
                    <CurrencyDisplay
                        exchangeRateKrw={exchangeRateData ? normalizeCurrent(exchangeRateData[0].rate, exchangeRateData[0].currency) : 0}
                        currencyCode={CurrencyEnum.JPY}
                        currencyName={CurrencyName.JPY}
                        changeRate={exchangeRateData ? exchangeRateData[0].changePercentage : 0}
                        loading={exchangeRateLoading}
                    />
                </>
            )
            }

        </div>
    )
}