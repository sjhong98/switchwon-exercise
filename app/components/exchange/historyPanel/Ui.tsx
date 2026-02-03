'use client'

import { useMemo } from "react";

import useExchange from "@/app/hooks/useExchange";
import formatNumber from "@/app/lib/formatNumber";
import { ExchangeHistory } from "@/app/types/Exchange";

import Container from "../../common/Container";
import ErrorContainer from "../../common/ErrorContainer";

const cellClass = "min-w-0 overflow-hidden text-ellipsis whitespace-nowrap px-8 py-4";

function TableCell({
    children,
    className = '',
    align = 'left',
}: {
    children: React.ReactNode;
    className?: string;
    align?: 'left' | 'right';
}) {
    return (
        <td className={`${cellClass} ${align === 'right' ? 'text-right' : ''} ${className}`} style={{ minHeight: 16 }}>
            {children}
        </td>
    );
}

export default function ExchangeHistoryPanel() {
    const { exchangeHistoryData, exchangeHistoryLoading, exchangeHistoryError, refetchExchangeHistory } = useExchange();

    const temporaryExchangeHistory = Array(3).fill(null).map((_, index) => ({ orderId: index }));

    const tableHeader = useMemo(() => {
        return (
            <thead>
                <tr className="border-b border-t border-gray-200">
                    <th className={`${cellClass} w-[100px] text-left font-semibold`}>거래 ID</th>
                    <th className={`${cellClass} min-w-[150px] text-left font-semibold`}>거래 일시</th>
                    <th className={`${cellClass} min-w-[150px] text-right font-semibold`}>매수 금액</th>
                    <th className={`${cellClass} min-w-[120px] text-right font-semibold`}>체결 환율</th>
                    <th className={`${cellClass} min-w-[170px] lg:min-w-[150px] pr-5 lg:pr-8 text-right font-semibold`}>매도 금액</th>
                </tr>
            </thead>
        );
    }, []);

    const tableSkeleton = useMemo(() => {
        return (
            <tbody>
                {Array.from({ length: 3 }).map((_, index) => (
                    <tr key={index}>
                        <td colSpan={5} className="px-8 py-2 align-top">
                            <div className="w-full h-10 bg-gray-100 rounded animate-pulse" />
                        </td>
                    </tr>
                ))}
            </tbody>
        )
    }, []);

    const tableBody = useMemo(() => {
        const dataArray = (exchangeHistoryData && Array.isArray(exchangeHistoryData)) ? exchangeHistoryData : temporaryExchangeHistory as ExchangeHistory[];

        return exchangeHistoryLoading ? (
            tableSkeleton
        ) : (
            <tbody>
                {dataArray.map((exchangeHistory) => (
                    <tr key={exchangeHistory.orderId} className="hover:bg-gray-50 duration-100">
                        <TableCell className="w-[100px] max-w-[100px]">{exchangeHistory?.orderId ?? ''}</TableCell>
                        <TableCell className="min-w-[150px]">{(exchangeHistory?.orderedAt)?.replace('T', ' ') ?? '-'}</TableCell>
                        <TableCell align="right" className="min-w-[150px]">{`${formatNumber(exchangeHistory?.toAmount ?? 0)} ${exchangeHistory?.toCurrency ?? '-'}`}</TableCell>
                        <TableCell align="right" className="min-w-[120px]">{`${formatNumber(exchangeHistory?.appliedRate ?? 0)} KRW`}</TableCell>
                        <TableCell align="right" className="min-w-[170px] lg:min-w-[150px] pr-5 lg:pr-8">{`${formatNumber(exchangeHistory?.fromAmount ?? 0)} ${exchangeHistory?.fromCurrency ?? '-'}`}</TableCell>
                    </tr>
                ))}
            </tbody>
        );
    }, [exchangeHistoryData, temporaryExchangeHistory, exchangeHistoryLoading]);

    return exchangeHistoryError ? (
        <ErrorContainer refetch={refetchExchangeHistory} className='min-h-[400px]' />
    ) : (
        <Container className="!px-0 text-sm text-gray-600 overflow-x-auto" backgroundColor="transparent">
            <table className="w-full min-w-max border-collapse">
                {tableHeader}
                {(Array.isArray(exchangeHistoryData) && exchangeHistoryData?.length === 0) ? (
                    <tbody>
                        <tr>
                            <td colSpan={5} className="text-center text-gray-500 py-16">
                                환전 내역이 없습니다.
                            </td>
                        </tr>
                    </tbody>
                ) : (
                    tableBody
                )}
            </table>
        </Container>
    )
}