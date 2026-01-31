import Button from "@/app/components/common/Button";
import Container from "@/app/components/common/container";
import Dropdown from "@/app/components/common/Dropdown";
import SuffixInput from "@/app/components/common/SuffixInput";
import Tab from "@/app/components/common/Tab";
import Image from "next/image";
import { ReactNode, useMemo, useState } from "react";

export default function ExchangePanel() {
    const [activeTab, setActiveTab] = useState<'buy' | 'sell'>('buy');

    const currencyList = [
        {
            flag: "/assets/flags/united-states.svg",
            country: "미국",
            code: "USD",
            name: "미국 달러",
        },
        {
            flag: "/assets/flags/japan.svg",
            country: "일본",
            code: "JPY",
            name: "일본 엔화",
        },
    ]

    const SelectedCurrencyComponent = useMemo(() => {
        return (
            <div className='flex gap-1.5'>
                <Image src={currencyList[0].flag} alt={currencyList[0].name} width={16} height={16} />
                <div className='flex gap-1 text-md font-semibold'>
                    <p>{currencyList[0].code}</p>
                    <p>환전하기</p>
                </div>
            </div>
        )
    }, [currencyList])

    const DropdownItemList = useMemo(() => {
        return currencyList.map((currency) => (
            <div key={currency.code} className="flex items-center gap-2 cursor-pointer text-[12px] font-nornal">
                <Image src={currency.flag} alt={currency.name} width={16} height={16} />
                <div className="flex gap-1">
                    <p>{currency.country}</p>
                    <p>{currency.code}</p>
                </div>
            </div>
        ))
    }, [currencyList])

    return (
        <Container className="flex flex-col gap-4 h-full">
            <Dropdown
                triggerComponent={SelectedCurrencyComponent}
                itemList={DropdownItemList as ReactNode[]}
                onSelect={() => { }}
            />
            <Tab
                tabs={[
                    { label: '살래요', value: 'buy', color: 'var(--color-main-red)' },
                    { label: '팔래요', value: 'sell', color: 'var(--color-main-blue)' },
                ]}
                activeTab={activeTab}
                onTabChange={(tab) => { setActiveTab(tab as 'buy' | 'sell') }}
            />
            <SuffixInput
                label="매수 금액"
                suffix="달러 사기"
                value={0}
                onChange={(e) => { }}
                className='font-semibold'
            />
            <div className='flex w-full justify-center'>
                <Image src="/assets/nextArrowCircle.svg" alt="next" width={24} height={24} />
            </div>
            <SuffixInput
                label="필요 원화"
                suffix="원 필요해요"
                value={0}
                className="!bg-gray-100 !border-gray-300 font-semibold"
                disabled
            />
            <div className="flex justify-between items-center mt-auto w-full border-t border-gray-300 pt-4">
                <p>적용 환율</p>
                <p className="text-md font-semibold text-gray-500">{`1 USD = 1300 KRW`}</p>
            </div>
            <Button onClick={() => { }} className="w-full">
                <p className="text-md font-semibold text-white">환전하기</p>
            </Button>
        </Container>
    )
}   