import type { Metadata } from "next";
import localFont from "next/font/local";

import ClientLayout from "./clientLayout";

import "./globals.css";

const pretendard = localFont({
  src: [
    { path: "./fonts/Pretendard-Thin.otf", weight: "100" },
    { path: "./fonts/Pretendard-ExtraLight.otf", weight: "200" },
    { path: "./fonts/Pretendard-Light.otf", weight: "300" },
    { path: "./fonts/Pretendard-Regular.otf", weight: "400" },
    { path: "./fonts/Pretendard-Medium.otf", weight: "500" },
    { path: "./fonts/Pretendard-SemiBold.otf", weight: "600" },
    { path: "./fonts/Pretendard-Bold.otf", weight: "700" },
    { path: "./fonts/Pretendard-ExtraBold.otf", weight: "800" },
    { path: "./fonts/Pretendard-Black.otf", weight: "900" },
  ],
  variable: "--font-pretendard",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Exchange App",
  description: "환전하기",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${pretendard.variable} font-sans antialiased`}>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
