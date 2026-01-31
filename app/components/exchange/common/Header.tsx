'use client'

import Image from "next/image";
import Button from "@/app/components/common/Button";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

export default function ExchangeHeader() {
    const pathname = usePathname();

    const isExchangePage = pathname === '/exchange';
    const isHistoryPage = pathname === '/transactions';

    return (
        <div id='exchange-header' className='flex w-full h-[60px] items-center justify-between border-b-1 border-gray-200 px-12'>
            {/* Logo */}
            <div className='flex items-center gap-2'>
                <Image src="/assets/logo.svg" alt="logo" width={30} height={30} />
                <h1 className='text-2xl font-bold'>Exchange App</h1>
            </div>

            <div className='flex items-center gap-16'>
                <div className='flex items-center gap-12'>
                    <a href="/exchange" className={isExchangePage ? `text-sm font-bold` : `text-sm text-gray-500`}>환전 하기</a>
                    <a href="/transactions" className={isHistoryPage ? `text-sm font-bold` : `text-sm text-gray-500`}>환전 내역</a>
                </div>
                <Button onClick={() => { }} size="sm" color="main">
                    <p className='text-[12px]'>Log Out</p>
                </Button>
            </div>
        </div>
    )
}