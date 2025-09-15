"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavigationProps {
  className?: string;
}

export default function Navigation({ className = "" }: NavigationProps) {
  const pathname = usePathname();

  // 현재 경로에 따라 활성 상태를 결정하는 함수
  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <header className={`w-full bg-white shadow-sm ${className}`}>
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-center gap-12">
        <Link
          href="/about"
          className={`hover:font-semibold transition-all ${
            isActive("/about")
              ? "bg-gradient-to-r from-pink-400 to-pink-500 text-white px-6 py-2 rounded-full font-semibold"
              : "text-gray-700"
          }`}
        >
          About
        </Link>
        <Link
          href="/works"
          className={`hover:font-semibold transition-all ${
            isActive("/works")
              ? "bg-gradient-to-r from-pink-400 to-pink-500 text-white px-6 py-2 rounded-full font-semibold"
              : "text-gray-700"
          }`}
        >
          Works
        </Link>
        <Link
          href="/designers"
          className={`hover:font-semibold transition-all ${
            isActive("/designers")
              ? "bg-gradient-to-r from-pink-400 to-pink-500 text-white px-6 py-2 rounded-full font-semibold"
              : "text-gray-700"
          }`}
        >
          Designers
        </Link>
        <Link
          href="/guest"
          className={`hover:font-semibold transition-all ${
            isActive("/guest")
              ? "bg-gradient-to-r from-pink-400 to-pink-500 text-white px-6 py-2 rounded-full font-semibold"
              : "text-gray-700"
          }`}
        >
          Guest
        </Link>
      </nav>
    </header>
  );
}
