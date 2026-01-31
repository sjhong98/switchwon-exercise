import CurrencyDisplayPanel from "@/app/components/exchange/exchange/panels/CurrencyDisplayPanel";
import MyWalletDisplayPanel from "@/app/components/exchange/exchange/panels/MyWalletDisplayPanel";
import ExchangePanel from "@/app/components/exchange/exchange/panels/ExchangePanel";

export default function ExchangeDashboard() {
    return (
        <div className="flex gap-4 w-full">
            <div className='flex flex-col w-full gap-4 flex-[1]'>
                <div className='flex w-full gap-4'>
                    <CurrencyDisplayPanel exchangeRateKrw={1000} currencyCode="USD" currencyName="미국 달러" changeRate={0.5} />
                    <CurrencyDisplayPanel exchangeRateKrw={1000} currencyCode="JPY" currencyName="일본 엔화" changeRate={-0.25} />
                </div>
                <MyWalletDisplayPanel />
            </div>
            <div className='flex flex-col w-full gap-4 flex-[1]'>
                <ExchangePanel />
            </div>
        </div>
    )
}