import Container from "@/app/components/common/container";

export default function MyWalletDisplay() {
    const wallets = [
        {
            currencyCode: "USD",
            currencySymbol: "$",
            amount: 1000,
        },
        {
            currencyCode: "KRW",
            currencySymbol: "₩",
            amount: 1000000,
        },
        {
            currencyCode: "JPY",
            currencySymbol: "¥",
            amount: 1000,
        },
    ]
    const totalAmount = wallets.reduce((acc, wallet) => acc + wallet.amount, 0);
    return (
        <Container className="flex flex-col gap-8 items-start w-full min-h-[400px]">
            <p className="text-xl font-bold">내 지갑</p>
            <div className="flex flex-col w-full gap-2">
                {
                    wallets.map((wallet) => (
                        <div key={wallet.currencyCode} className="flex w-full justify-between items-center gap-2">
                            <p className="text-md font-semibold text-gray-500">{wallet.currencyCode}</p>
                            <div className="flex items-center gap-1">
                                <p className="text-md font-semibold text-gray-500">{wallet.currencySymbol}</p>
                                <p className="text-md font-semibold text-gray-500">{Number(wallet.amount.toFixed(3)).toLocaleString()}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="flex justify-between items-center mt-auto w-full border-t border-gray-300 pt-4">
                <p>총 보유 자산</p>
                <p className="text-md font-bold text-main-blue">₩ {Number(totalAmount.toFixed(3)).toLocaleString()}</p>
            </div>
        </Container>
    )
}