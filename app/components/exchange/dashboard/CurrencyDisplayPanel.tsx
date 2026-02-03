import { useMemo } from "react";
import Image from "next/image";

import Container from "@/app/components/common/Container";
import P from "@/app/components/common/P";
import { CurrencyName } from "@/app/enums/currencyEnum";
import useExchangeRate from "@/app/hooks/useExchangeRate";
import formatNumber from "@/app/lib/formatNumber";
import normalizeCurrency from "@/app/lib/normalizeCurrency";
import { Currency } from "@/app/types/Currency";

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
        <Container backgroundColor="transparent" className='flex flex-col items-start w-full gap-2 overflow-hidden'>
            <div className="flex items-center justify-between w-full gap-2 overflow-hidden">
                <P className="text-md font-bold text-gray-500">{currencyCode}</P>
                <P className="text-sm font-light text-gray-500">{currencyName}</P>
            </div>
            <P className="w-full text-2xl font-bold text-gray-900" loading={loading} height={32}>{formatNumber(exchangeRateKrw)} KRW</P>
            <div className='flex items-center w-full'>
                {!is0 ? (isIncrease ? <Image src="/assets/upArrow.svg" alt="arrow-up" width={24} height={24} /> : <Image src="/assets/downArrow.svg" alt="arrow-down" width={24} height={24} />) : <div className="w-1 h-6" />}
                <P className={`text-md font-normal text-gray-500 mt-[-2px] ${isIncrease ? 'text-main-red' : 'text-main-blue'}`} loading={loading} height={24}>{formatNumber(changeRate, 1, 1)}%</P>
            </div>
        </Container>
    )
}

export default function CurrencyDisplayPanel() {
    const { exchangeRateData, exchangeRateLoading, exchangeRateError, refetchExchangeRate } = useExchangeRate();

    const currencyDisplayList: Currency[] = useMemo(() => {
        return ['USD', 'JPY'];
    }, []);

    const currencyDisplayDataList = useMemo(() => {
        return currencyDisplayList.map((currency) => {
            return exchangeRateData?.find((rate) => rate.currency === currency) ?? {
                currency,
                rate: 0,
                changePercentage: 0,
            };
        });
    }, [exchangeRateData, currencyDisplayList]);

    return (
        <div className='flex flex-col sm:flex-row w-full gap-4'>
            {exchangeRateError ? (
                <ErrorContainer refetch={refetchExchangeRate} />
            ) : (
                <>
                    {
                        currencyDisplayDataList.map((data, index) => {
                            return (
                                <CurrencyDisplay
                                    key={data?.currency ?? index}
                                    exchangeRateKrw={data ? normalizeCurrency(data.rate, data.currency as Currency) : 0}
                                    currencyCode={data?.currency ?? ''}
                                    currencyName={CurrencyName[data?.currency as Currency] ?? ''}
                                    changeRate={data ? data.changePercentage : 0}
                                    loading={exchangeRateLoading}
                                />
                            )
                        })
                    }
                </>
            )}

        </div>
    )
}