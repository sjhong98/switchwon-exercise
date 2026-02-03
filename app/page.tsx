'use client'

import { useRouter } from "next/navigation";

import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push('/exchange');
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-zinc-50 font-sans dark:bg-black">
    </div>
  );
}
