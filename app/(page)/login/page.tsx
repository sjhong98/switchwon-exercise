'use client'

import { useCallback, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import Button from "@/app/components/common/Button";
import Input from "@/app/components/common/Input";
import Container from "@/app/components/common/Container";
import P from "@/app/components/common/P";
import useAuth from "@/app/hooks/useAuth";
import { errorToast } from "@/app/lib/toast";

export default function LoginPageComponent() {
    const { signIn } = useAuth();
    const router = useRouter();

    const [email, setEmail] = useState('');

    const handleLogin = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            await signIn(email)
            router.push('/exchange')
        } catch (error) {
            errorToast('로그인에 실패했습니다. 다시 시도해주세요.')
        }
    }, [email, signIn])

    return (
        <div className='flex flex-col items-center justify-center h-screen gap-10 px-12'>
            <div className='flex flex-col items-center justify-center w-full gap-4 overflow-hidden'>
                <Image src="/assets/logo.svg" alt="로고" width={80} height={80} />
                <P element="h1" className='w-full text-4xl text-center font-bold text-gray-600'>반갑습니다.</P>
                <P element="h2" className='w-full text-2xl text-center font-light text-gray-500'>로그인 정보를 입력해 주세요.</P>
            </div>
            <Container className="items-center justify-center w-full max-w-[500px]">
                <form onSubmit={handleLogin} className="flex flex-col w-full gap-4">
                    <Input label="이메일 주소를 입력해 주세요." id="email" autoComplete="off" placeholder="email@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <Button type="submit" className="w-full" disabled={email.length === 0}>로그인</Button>
                </form>
            </Container>
        </div>
    )
}