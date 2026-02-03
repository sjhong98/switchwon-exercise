import CurrencyDisplayPanel from "@/app/components/exchange/dashboard/CurrencyDisplayPanel";
import ExchangePanel from "@/app/components/exchange/dashboard/ExchangePanel";
import MyWalletDisplayPanel from "@/app/components/exchange/dashboard/MyWalletDisplayPanel";

export default function ExchangeDashboard() {
    return (
        <div className="flex flex-col lg:flex-row w-full gap-4">
            <div className='flex flex-col w-full flex-[1] gap-4'>
                <CurrencyDisplayPanel />
                <MyWalletDisplayPanel />
            </div>
            <div className='flex flex-col w-full flex-[1] gap-4'>
                <ExchangePanel />
            </div>
        </div>
    )
}