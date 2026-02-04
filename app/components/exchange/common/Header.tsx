'use client'

import { useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import Button from "@/app/components/common/Button";
import P from "@/app/components/common/P";
import useAuth from "@/app/hooks/useAuth";

export default function ExchangeHeader() {
    const router = useRouter()
    const pathname = usePathname();
    const { signOut } = useAuth();

    const isExchangePage = pathname === '/exchange';
    const isHistoryPage = pathname === '/exchange/history';

    const handleSignOut = useCallback(() => {
        signOut()
        router.push('/login')
    }, [router, signOut])

    return (
        <div id='exchange-header' className='flex items-center justify-between w-full h-[60px] px-6 lg:px-12 border-b-1 border-gray-200'>
            {/* Logo */}
            <div className='flex items-center gap-2 cursor-pointer' onClick={() => router.push('/exchange')}>
                <Image src="/assets/logo.svg" alt="logo" width={30} height={30} />
                <P className='hidden lg:block text-2xl font-bold'>Exchange App</P>
            </div>

            <div className='flex items-center gap-8 lg:gap-16'>
                <nav className='flex items-center gap-6 lg:gap-12 overflow-hidden'>
                    <Link href="/exchange" className={`min-w-0 ${isExchangePage ? 'text-sm font-bold' : 'text-sm text-gray-500'} overflow-hidden text-ellipsis whitespace-nowrap`}>환전 하기</Link>
                    <Link href="/exchange/history" className={`min-w-0 ${isHistoryPage ? `text-sm font-bold` : `text-sm text-gray-500`} overflow-hidden text-ellipsis whitespace-nowrap`}>환전 내역</Link>
                </nav>
                <Button onClick={handleSignOut} size="sm" color="main" textClassName='text-[12px]'>
                    Log Out
                </Button>
            </div>
        </div>
    )
}