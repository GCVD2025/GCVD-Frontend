import type { Metadata } from "next";
import "./globals.css";
import { Navigation } from "@/components";
import { QueryProvider } from "@/components/QueryProvider";

export const metadata: Metadata = {
  title: "GCVD 2025",
  description: "가천대학교 시각디자인학과 40회 졸업전시",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased">
        <QueryProvider>
          <Navigation />
          {children}
        </QueryProvider>
      </body>
    </html>
  );
}
