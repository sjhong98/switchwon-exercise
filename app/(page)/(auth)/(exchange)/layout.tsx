'use client'

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

import ExchangeHeader from "@/app/components/exchange/common/Header";
import useAuth from "@/app/hooks/useAuth";

export default function ExchangeLayout({ children }: { children: React.ReactNode }) {
    const router = useRouter()
    const pathname = usePathname();
    const { checkSession } = useAuth();

    useEffect(() => {
        checkSession().catch(() => router.push('/login'))
    }, [pathname])

    return (
        <div className='flex flex-col min-h-screen'>
            <ExchangeHeader />
            <main className='flex flex-col w-full h-full px-6 py-12 lg:px-20' id='exchange-main'>
                {children}
            </main>
        </div>
    )
}