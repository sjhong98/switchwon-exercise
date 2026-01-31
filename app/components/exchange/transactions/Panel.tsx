import { useCallback, useMemo } from "react";
import Container from "../../common/container";

// todo:
// infinite scroll

interface Transaction {
    transactionId: string;
    transactionDate: string;
    buyAmount: string;
    exchangeRate: string;
    sellAmount: string;
}

export default function TransactionsPanel() {
    const columnList = [
        {
            label: '거래 ID',
            key: 'transactionId',
            widthRatio: 1,
            align: 'left'
        },
        {
            label: '거래 일시',
            key: 'transactionDate',
            widthRatio: 0.6,
            align: 'left'
        },
        {
            label: '매수 금액',
            key: 'buyAmount',
            widthRatio: 1,
            align: 'right'
        },
        {
            label: '체결 환율',
            key: 'exchangeRate',
            widthRatio: 1,
            align: 'right'
        },
        {
            label: '매도 금액',
            key: 'sellAmount',
            widthRatio: 1,
            align: 'right'
        }
    ]

    const transactionList = useMemo(() => {
        return [
            {
                transactionId: '1234567890',
                transactionDate: '2026-01-01 12:00:00',
                buyAmount: (1000).toLocaleString(),
                exchangeRate: (1300).toLocaleString(),
                sellAmount: (1300000).toLocaleString(),
            },
            {
                transactionId: '123456789',
                transactionDate: '2026-01-01 12:00:00',
                buyAmount: (1000).toLocaleString(),
                exchangeRate: (1300).toLocaleString(),
                sellAmount: (1300000).toLocaleString(),
            },
        ]
    }, [])

    const tableRow = useCallback((args: Transaction, isHeader: boolean = false) => {
        return (
            <div key={args.transactionId} className={`flex w-full px-8 py-4 ${!isHeader && 'hover:bg-gray-50 duration-100'}`}>
                <p className="w-full">{args.transactionId}</p>
                <p className="w-full">{args.transactionDate}</p>
                <p className="w-full text-right">{args.buyAmount}</p>
                <p className="w-full text-right">{args.exchangeRate}</p>
                <p className="w-full text-right">{args.sellAmount}</p>
            </div>
        )

    }, [])

    return (
        <Container className="!px-0 text-sm text-gray-600" backgroundColor="transparent">
            <div className="flex w-full h-full gap-4 border-b border-t border-gray-200">
                {tableRow({
                    transactionId: '거래 ID',
                    transactionDate: '거래 일시',
                    buyAmount: '매수 금액',
                    exchangeRate: '체결 환율',
                    sellAmount: '매도 금액',
                }, true)}
            </div>
            <div className="flex flex-col w-full h-full border-gray-200 whitespace-nowrap">
                {transactionList.map((transaction) => tableRow(transaction))}
            </div>
        </Container>
    )
}