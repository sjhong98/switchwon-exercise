import ExchangeHeader from "@/app/components/exchange/common/Header";

export default function ExchangeLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className='flex flex-col min-h-screen'>
            <ExchangeHeader />
            <div className='flex flex-col w-full h-full px-20 py-12'>
                {children}
            </div>
        </div>
    )
}