'use client'

import Image from "next/image";
import Button from "@/app/components/common/Button";
import Input from "@/app/components/common/Input";
import Container from "@/app/components/common/container";

export default function LoginPageComponent() {
    return (
        <div className='flex flex-col justify-center items-center h-screen gap-10'>
            <div className='flex flex-col justify-center items-center gap-4'>
                <Image src="/assets/logo.svg" alt="로고" width={80} height={80} />
                <h1 className='text-4xl font-bold text-center text-gray-600'>반갑습니다.</h1>
                <h2 className='text-2xl font-light text-center text-gray-500'>로그인 정보를 입력해 주세요.</h2>
            </div>
            <Container className="justify-center items-center gap-6 min-w-[500px]">
                <Input label="이메일 주소를 입력해 주세요." id="email" autoComplete="off" placeholder="email@example.com" />
                <Button onClick={() => { }} className="w-full">로그인</Button>
            </Container>
        </div>
    )
}