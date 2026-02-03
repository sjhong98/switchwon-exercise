import Container from "@/app/components/common/Container";
import P from "@/app/components/common/P";
import { CurrencyEnum, CurrencySymbol } from "@/app/enums/currencyEnum";
import useWallet from "@/app/hooks/useWallet";
import formatNumber from "@/app/lib/formatNumber";
import { Wallet } from "@/app/types/Wallet";

import ErrorContainer from "../../common/ErrorContainer";

export default function MyWalletDisplay() {
    const { walletData, walletLoading, walletError, refetchWallet } = useWallet();

    const initialWallets = {
        totalKrwBalance: 0,
        wallets: [
            {
                walletId: 0,
                currency: CurrencyEnum.KRW,
                balance: 0,
            },
            {
                walletId: 1,
                currency: CurrencyEnum.USD,
                balance: 0,
            },
            {
                walletId: 2,
                currency: CurrencyEnum.JPY,
                balance: 0,
            },
        ]
    }

    return walletError ? (
        <ErrorContainer refetch={refetchWallet} className='min-h-[400px]' />
    ) : (
        <Container className="flex flex-col items-start w-full min-h-[400px] gap-8 overflow-hidden">
            <p className="text-xl font-bold">내 지갑</p>
            <div className="flex flex-col w-full gap-2">
                { (walletData ?? initialWallets).wallets.map((wallet: Wallet) => (
                        <div key={wallet.walletId} className="flex items-center justify-between w-full gap-2">
                            <p className="text-md font-semibold text-gray-500">{wallet.currency}</p>
                            <div className="flex justify-end w-[50%] gap-1 overflow-hidden text-right">
                                <P className="text-md font-semibold text-gray-500" loading={walletLoading} height={24}>{`${CurrencySymbol[wallet.currency]} ${formatNumber(wallet.balance, 3, 3)}`}</P>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="flex items-center justify-between w-full mt-auto pt-4 border-t border-gray-300">
                <P className="w-[50%]">총 보유 자산</P>
                <P className="w-[50%] text-md font-bold text-main-blue text-right" loading={walletLoading} height={24}>₩ {formatNumber((walletData ?? initialWallets).totalKrwBalance, 0, 0)}</P>
            </div>
        </Container>
    )
}